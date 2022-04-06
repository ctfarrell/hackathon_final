var sandbox_key = 'b25f1f0bf9e2319a83a883ce5a01128c-0677517f-e155606b';
var api_key = process.env.MAILGUN_API_KEY
var domain = 'teamintrinsic.com';
var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});
 
export default async function sendHackathonEmail(req, res) {
    const body = JSON.parse(req.body)
    console.log(body)
    res.status(200).json({"send": "email"});
    const data = {
        from: 'Swag Delivery <swag@teamintrinsic.com>',
        to: body.email,
        subject: 'Time To Claim Your Swag!',
        html: `<div align='center'>
                <h2>We Confirmed Your Eligibility!</h2>
                <p>We validated your email, and now there's only one step left!
                <h3>Where do we send it?</h3>
                <p>Submit your Ethereum Address at the secure link below then we'll send you your swag!<p>
                <h3>Secure Link: <a href="${body.url}">${body.url}</a></h3>
                <h4 style="padding-top:30px">We'll see you in the Metaverse!</h4>
                <h4>- Team Intrinsic!</h4>
            </div>
             `
      };
    mailgun.messages().send(data, function (error, body) {
        console.log("email log", body, error)
    })
  }
