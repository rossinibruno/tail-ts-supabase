import { faker } from '@faker-js/faker';

export function getUsers(hits: number) {
  const users = [];

  for (let i = 0; i < hits; i++) {
    users.push({
      name: faker.name.findName(),
      email: faker.internet.email(),
      company: faker.company.companyName(),
      phone: faker.phone.phoneNumber('+55 ## #####-####')
    });
  }

  return users;
}
