module.exports = {
    async afterCreate(swag){
        const { swagData } = swag;
        try{ await strapi.plugins['email'].services.email.send({
            to: 'chance.farrell@protonmail.com',
            subject: 'Use strapi email provider successfully',
            text: 'Hello world!',
            html: 'Hello world!',
          });
        }catch(err){
            console.log(err)
        }
    }
}