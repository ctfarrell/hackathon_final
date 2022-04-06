# Team Intrinsic Hackathon Project

![chat](https://img.shields.io/discord/920017222645186680)

Website [Link](https://intrinsic-client.herokuapp.com/) 
<p align="center">
  <img src="https://github.com/ctfarrell/hackathon_final/blob/main/intrinsic-home.png" alt="image ..." />
</p>

# Presentation
We used Canva for our Final Presentation [Canva Link](https://www.canva.com/design/DAE60MKQhvk/ZwLFoLS5c7E-6eHG7sQqng/view?utm_content=DAE60MKQhvk&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton)

### Key Website Features 
* Token Gated and Free Metaverse [Experiences](https://intrinsic-client.herokuapp.com/experiences)
* [Swag Shop](https://intrinsic-client.herokuapp.com/swag) - buy your own Metaverse T-Shirt!
* Claim Your Free Hackathon T-Shirt [HERE](https://intrinsic-client.herokuapp.com/hackathon)
-- Hackathon T-Shirt [Dashboard](https://intrinsic-client.herokuapp.com/hackathon/dash)

<p align="center" style = "width: 50%;">
  <img src="https://github.com/ctfarrell/hackathon_final/blob/main/doge_shirt.jpeg" alt="image ..." />
</p>

# Development Files
All the development files are right here in this repo!
1. clone the repo
2. run the backend `cd api` then `yarn && yarn develop`
3. run the frontend `cd client` then `yarn && yarn dev`
4. create an account at `http://localhost:1337/admin`
5. Add some swags and some experiences and you're all set!

For more details checkout the [client readme](https://github.com/ctfarrell/hackathon_final/tree/main/client) and the [api readme](https://github.com/ctfarrell/hackathon_final/tree/main/api) for more details!
# Tech Stack
We used a ton of neat open source :rocket: technology for our project!
 * [Strapi](https://strapi.io/) was our backend framework, and we used their demo [FoodAdvisor](https://github.com/strapi/foodadvisor) app as a starting point :ice_cream: 
 * [NextJS](https://nextjs.org/) - was our frontend framework, and allowed us to hide some of our backend services in their handy API routes :briefcase: 
 * [Chakra UI](https://chakra-ui.com/) - We replaced the TailwindCSS in the FoodAdvisor demo app with Chakra to move a bit quicker and we didn't have a designer so using Chakra out of the box :ballot_box_with_ballot: made more sense. 
 * [Heroku](https://www.heroku.com/) - Heroku was a super easy place to launch a fullstack node application. They only charged me 3.25 for two hobby level dynos for a couple of weeks! :sunglasses: 
 * [Google Cloud Storage](https://cloud.google.com/storage) - I had to create a storage bucket with google to keep / serve some of our image assets. :golf: 
 * [Ethers JS](https://docs.ethers.io/v5/) - continues to check all of the boxes :ballot_box_with_check: for working with EVM based blockchains
 * [Alchemy](https://www.alchemy.com/) - Was our node provider for our backend service, we tried a few others - but Alchemy was super easy. :sparkles: 
 * [PostgreSQL](https://www.postgresql.org/) - Was our database provider, and Strapi Docs + the Heroku Plugin made deployment a breeze. :bookmark_tabs: 
 * [web3-react](https://github.com/NoahZinsmeister/web3-react) - made maintaining wallet state across our app super easy as well as gave us a handy error to catch users logging into the wrong chain. :walking: 
 * [OpenZepplin](https://openzeppelin.com/) - Open Zepplin's ERC-721 Contract Wizard and docs made it super simple to create a simple token gating portal in a couple of hours when we had a teammate come down sick :biohazard_sign: 
 * [Remix](https://remix.ethereum.org/) - Open Zepplin lets you open your contracts from their wizard into Remix. From Remix we were able to easily compile and deploy to polygon. :dagger_knife: 
 * [Mailgun](https://www.mailgun.com/) - Handy service for sending emails via API! :gun: 

**Non-Dev Resources**
* [Blender](https://www.blender.org/) - We used Blender as our 3d modeling tool to create the hackathon T-Shirts :tshirt: 
* [Decentraland](https://decentraland.org/) - Decentraland and the DAO were helpful in approving our shirts and providing tons of [resources](https://github.com/decentraland/avatar-assets) for building them!
<p align="center" style = "width: 50%;">
  <img src="https://github.com/ctfarrell/hackathon_final/blob/main/intrinsic_swag.gif" alt="gif ..." />
</p>

* [Spatial.io](https://spatial.io/) - Spatial was another excellent metaverse platform we used and has the best avatar generator out there! 
<p align="center" style = "width: 50%;">
  <img src="https://github.com/ctfarrell/hackathon_final/blob/main/spatial_meeting.png" alt="image ..." />
</p>

* [Canva](https://www.canva.com/) - was our all-in-one video editor / image editor / presentation tool creator :frame_with_picture: 


# Meeting Dates
1. March 8th - First Meeting with Isaiah, Dani and Chance in Spatial!
2. March 9th - Chance and Dr. Steelman, idea proposal
3. March 15th - First Meeting with Christie from CFC and Team Intrinsic! We proposed the Spatial Ideas and the website.
4. March 16h - Chance and Dr. Steelman, regular update and first site demo
5. March 29th - Chance and Isaiah, Dani was in the Hospital. Presentation touchbase
6. March 30th - Chance and Dr. Steelman, Site Demo and T-Shirt Walkthrough
7. March 31st - Team Intrinsic Presentation Finalization!


# Lessons Learned
1. Don't show up to a hackathon with a working solution :wink: 
-- I'm kidding, mostly. It sounds like the changes ya'll are planning for next year are positive.
2. Consider the judges! :female-judge: :male-judge: 
-- Taking a step back, I probably should have considered a hackathon at a business school wouldn't be won by the team with a technical solution... but here we are! 
-- We knew who the judges would be ahead of time, and maybe could have changed our presentation to suit them better.
3. I could be better at changing folks minds :sandwich:
-- I spent a lot of time trying to convince my team to give up our use case and create our own metaverse focused business case. 
-- I was unsuccessful and as a result we spent a lot of our presentation explaining Center for Creators, the organization we were working with.
-- I think that hurt us a bit in the end.
5. I learned a lot about software deployment / architecture - things I did for the first time in this hackathon: 
--- Deploy a solution to Heroku
--- Use Google Cloud Storage
--- Rolled my own PostgreSQL Database
--- Send Emails through an API
--- Run integrated frontend / backend services
--- Bought a domain name
--- Created an E2E user flow
--- Designed any sort of 3D Model
--- Created my own NFTs on a production blockchain
