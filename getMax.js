const getMax = (dict = {}, roles = []) => {
    return roles.reduce((max, role) => dict[role] > dict[max] ? role : max, roles[0]);
}

const roles = ['user', 'admin', 'vip'];
const dict = {
    guest: 1,
    user: 20,
    admin: 100,
    vip: 50,
}

console.log(getMax(dict, roles));
