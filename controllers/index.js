//controllers
const ProfileRepository = require('../repositories/ProfileRepository')
const MenuRepository = require('../repositories/MenuRepository')


const jsonSuccess = (data, response) => {
    response.json({profile: data[0], gallery:data[1]})
}
const postError = (error, response) => {
    console.log('postError')
    response.send({data:{}})
}
const Success = (data, response) => {
    response.render('index', {data: data})
}
const Error = (error, response) => {
    response.render('index', {})
}
module.exports = {
    index: async  (request, response) => {
        await MenuRepository.get()
            .then(rows => Success(rows, response))
            .catch(err => Error(err, response))
    },
    foo: async (request, response) => {
        await ProfileRepository.getById('yiyeoun')
            .then(rows => jsonSuccess(rows, response))
            .catch(err => postError(err, response))
    },
    othersProfile: async (request, response) => {
        await ProfileRepository.getById(request.body.id != null ? request.body.id : '')
            .then(rows => jsonSuccess(rows, response))
            .catch(err => postError(err, response))
    }
};