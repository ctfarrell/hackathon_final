var api_key = process.env.MAILGUN_API_KEY
var domain = 'teamintrinsic.com';
var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});
 
export default async function sendHackathonEmail(req, res) {
    const body = JSON.parse(req.body)
    console.log(body)
    const data = {
        from: 'Swag Delivery <swag@teamintrinsic.com>',
        to: body.email,
        subject: 'Your Swag is Delivered!',
        html: `<div align='center'>
                <h2>Your Swag Has Arrived!</h2>
                <p>Your delivery has been confirmed on chain. Check it out on <a href="https://polygonscan.com/tx/${body.txHash}">Polygon Scan<a>!</p>
                <h3>Now What?</h3>
                <p>We put together a short guide to show you how to wear it!</p>
                <p>Follow our "How to Get Dressed" guide <a href="${process.env.NEXT_PUBLIC_URL}/how-to-get-dressed">here</a>!</p>
                <h4 style="padding-top:30px">We'll see you in the Metaverse!</h4>
                <h4>- Team Intrinsic!</h4>
              </div>
            `
      };
    mailgun.messages().send(data, function (error, body) {
        console.log("email body", body, error)
    })
  }
