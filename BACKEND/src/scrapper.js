const axios = require('axios')
const cheerio = require('cheerio')

export default async (data) => {

    let url

    switch (data.faks.charAt) {
        case 'm': {
            url = `https://${data.faks}.unipu.hr/${data.faks}/o_akademiji/nastavnici`
            break;
        }
        case 'o': {
            url = `https://${data.faks}.unipu.hr/${data.faks}/o_odjelu/nastavnici`
            break;
        }
        case 'f': {
            url = `https://${data.faks}.unipu.hr/${data.faks}/o_fakultetu/nastavnici`
            break;
        }
        default:
            break;
    }

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

    if (predavaci.length > 0) return predavaci
    else return 'Failed to get data.'
}
