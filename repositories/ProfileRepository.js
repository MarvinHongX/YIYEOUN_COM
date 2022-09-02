const MasterRepository = require('./MasterRepository');

module.exports.getById = async (id) => {
    const result = await MasterRepository.execute(`
        call P_Profile(?)
    `,[id]);

    return result.length ? result : null;
}