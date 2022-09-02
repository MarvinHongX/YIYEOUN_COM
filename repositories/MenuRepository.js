const MasterRepository = require('./MasterRepository');

module.exports.get = async () => {
    const result = await MasterRepository.execute(`
        call P_Menu()
    `,);
    return result.length ? result[0] : null;
}