const axios = require('axios')
const cheerio = require('cheerio')

export default async (data) => {

    const url = `https://${data.faks}.unipu.hr/${data.faks}/o_fakultetu/nastavnici`

    const html = await axios.get(url)

    const $ = await cheerio.load(html.data)

    let predavaci = []

    $('div.middle-col > div.cms_area > div.portlet_djelatnici > div.cms_module_html div').find($('table > tbody > tr > td')).each((index, element) => {


        let profesor = $(element).find($('.person')).text().trim().split(' ')

        let posalji = profesor.filter((element) => {
            return element != ''
        })
        let polje = posalji.join(' ').replace(/\n/g, '') //ime prezime i titula

        let email = $(element).find('.text-ellipsis').find('a').attr('href')


        if (email == null) {
            predavaci[index] = {
                profesor: polje,
                email: ''
            }
        } else {
            let urediMail = email.slice(email.search(':') + 1, email.lenght) //email

            predavaci[index] = {
                profesor: polje,
                email: urediMail
            }
        }
    })
    return predavaci
}
