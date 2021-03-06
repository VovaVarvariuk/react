import React from "react";
import "./Child.css";

class Child extends React.Component {
  constructor() {
    super();
  }

  render() {
    //  console.log(this);

    const {
      data: {
        child: {
          name,
          surname,
          fatherName,
          id,
          gender,
          address: { city, street, region, buildingNumber },
        },
      },
    } = this.props;

    return (
      <>
        <div>
          {surname} {name} {fatherName}
        </div>
      </>
    );
  }
}

export default Child;

export const contract = [
  {
    id: 13,
    child: {
      id: 13,
      surname: "Андронік",
      name: "Андрій",
      fatherName: "Андрійович",
      birthDate: "2022-09-03T00:00:00.000+00:00",
      gender: "чол",
      birthDocument: "123123",
      address: {
        id: 25,
        region: "Чернівецька",
        city: "Чернівці",
        street: "Щербанюка",
        buildingNumber: "1",
        apartment: "1",
      },
      userParentOne: {
        id: 13,
        surname: "Андронік",
        name: "Андрій",
        fatherName: "Андрійович",
        birthDate: "2022-08-03T00:00:00.000+00:00",
        phone: "123456789",
        mail: "mail@com",
        passportId: null,
        address: {
          id: 26,
          region: "Чернівецька",
          city: "Чернівці",
          street: "Щербанюка",
          buildingNumber: "1",
          apartment: "1",
        },
        login: null,
        password: null,
      },
      benefits: "",
      status: "в черзі",
      userParentTwo: null,
      medicalDataId: 0,
      registerToGardenDate: "2021-04-12T17:09:27.000+00:00",
      cluster: {
        id: 1,
        name: "Ясельна",
        kindergarten: {
          id: 1,
          number: 1,
          name: "ДНЗ ",
          address: {
            id: 54,
            region: "Чернівецька",
            city: "Чернівці",
            street: "Шевченка",
            buildingNumber: "18/20",
            apartment: null,
          },
        },
      },
    },
    kindergarten: {
      id: 1,
      number: 1,
      name: "ДНЗ ",
      address: {
        id: 54,
        region: "Чернівецька",
        city: "Чернівці",
        street: "Шевченка",
        buildingNumber: "18/20",
        apartment: null,
      },
    },
    applyDate: "2021-04-12T17:09:27.000+00:00",
  },
  {
    id: 14,
    child: {
      id: 14,
      surname: "Степанчук",
      name: "Степан",
      fatherName: "Степанович",
      birthDate: "2021-03-21T00:00:00.000+00:00",
      gender: "чол",
      birthDocument: "123123",
      address: {
        id: 27,
        region: "Чернівецька",
        city: "Чернівці",
        street: "Щербанюка",
        buildingNumber: "1",
        apartment: "1",
      },
      userParentOne: {
        id: 14,
        surname: "Андронік",
        name: "Андрій",
        fatherName: "Андрійович",
        birthDate: "2021-03-21T00:00:00.000+00:00",
        phone: "123456789",
        mail: "mail@com",
        passportId: null,
        address: {
          id: 28,
          region: "Чернівецька",
          city: "Чернівці",
          street: "Щербанюка",
          buildingNumber: "1",
          apartment: "1",
        },
        login: null,
        password: null,
      },
      benefits: "",
      status: "в черзі",
      userParentTwo: null,
      medicalDataId: 0,
      registerToGardenDate: "2021-04-12T17:09:45.000+00:00",
      cluster: {
        id: 1,
        name: "Ясельна",
        kindergarten: {
          id: 1,
          number: 1,
          name: "ДНЗ ",
          address: {
            id: 54,
            region: "Чернівецька",
            city: "Чернівці",
            street: "Шевченка",
            buildingNumber: "18/20",
            apartment: null,
          },
        },
      },
    },
    kindergarten: {
      id: 1,
      number: 1,
      name: "ДНЗ ",
      address: {
        id: 54,
        region: "Чернівецька",
        city: "Чернівці",
        street: "Шевченка",
        buildingNumber: "18/20",
        apartment: null,
      },
    },
    applyDate: "2021-04-12T17:09:45.000+00:00",
  },
  {
    id: 16,
    child: {
      id: 16,
      surname: "Гешко",
      name: "Сергій",
      fatherName: "Іванович",
      birthDate: "2021-01-01T00:00:00.000+00:00",
      gender: "чоловіча",
      birthDocument: "єєє",
      address: {
        id: 31,
        region: "hjklhjkl",
        city: "hjhjh",
        street: "hjklhjkl",
        buildingNumber: "20",
        apartment: "41",
      },
      userParentOne: {
        id: 16,
        surname: "Гешко",
        name: "Іван",
        fatherName: "Петрович",
        birthDate: "2021-01-01T00:00:00.000+00:00",
        phone: "0507643014",
        mail: "hjk@hkjjh",
        passportId: null,
        address: {
          id: 32,
          region: "hjklhjkl",
          city: "hjhjh",
          street: "weqw",
          buildingNumber: "20",
          apartment: "41",
        },
        login: null,
        password: null,
      },
      benefits: "ні",
      status: "в черзі",
      userParentTwo: {
        id: 16,
        surname: "Гешко",
        name: "Іван",
        fatherName: "Петрович",
        birthDate: "2021-01-01T00:00:00.000+00:00",
        phone: "0507643014",
        mail: "hjk@hkjjh",
        passportId: null,
        address: {
          id: 32,
          region: "hjklhjkl",
          city: "hjhjh",
          street: "weqw",
          buildingNumber: "20",
          apartment: "41",
        },
        login: null,
        password: null,
      },
      medicalDataId: 0,
      registerToGardenDate: "2021-04-12T20:45:28.000+00:00",
      cluster: {
        id: 3,
        name: "Молодша",
        kindergarten: {
          id: 1,
          number: 1,
          name: "ДНЗ ",
          address: {
            id: 54,
            region: "Чернівецька",
            city: "Чернівці",
            street: "Шевченка",
            buildingNumber: "18/20",
            apartment: null,
          },
        },
      },
    },
    kindergarten: {
      id: 1,
      number: 1,
      name: "ДНЗ ",
      address: {
        id: 54,
        region: "Чернівецька",
        city: "Чернівці",
        street: "Шевченка",
        buildingNumber: "18/20",
        apartment: null,
      },
    },
    applyDate: "2021-04-12T20:45:28.000+00:00",
  },
  {
    id: 17,
    child: {
      id: 11,
      surname: "Тата",
      name: "Тратата",
      fatherName: "Тата",
      birthDate: "2017-04-04T00:00:00.000+00:00",
      gender: "жіноча",
      birthDocument: "1255",
      address: {
        id: 21,
        region: "стс",
        city: "смт",
        street: "вул",
        buildingNumber: "12",
        apartment: "12",
      },
      userParentOne: {
        id: 11,
        surname: "Тата",
        name: "Стс",
        fatherName: "Стр",
        birthDate: "1989-05-06T00:00:00.000+00:00",
        phone: "02364",
        mail: "авапа",
        passportId: null,
        address: {
          id: 22,
          region: "вап",
          city: "іііі",
          street: "віві",
          buildingNumber: "1",
          apartment: "1",
        },
        login: null,
        password: null,
      },
      benefits: "немає",
      status: "в черзі",
      userParentTwo: null,
      medicalDataId: 0,
      registerToGardenDate: "2021-04-12T17:12:03.000+00:00",
      cluster: {
        id: 1,
        name: "Ясельна",
        kindergarten: {
          id: 1,
          number: 1,
          name: "ДНЗ ",
          address: {
            id: 54,
            region: "Чернівецька",
            city: "Чернівці",
            street: "Шевченка",
            buildingNumber: "18/20",
            apartment: null,
          },
        },
      },
    },
    kindergarten: {
      id: 2,
      number: 2,
      name: 'ДНЗ "Посмішка"',
      address: {
        id: 55,
        region: "Чернівецька",
        city: "Чернівці",
        street: "Узбецька",
        buildingNumber: "29",
        apartment: null,
      },
    },
    applyDate: "2021-04-12T20:45:28.000+00:00",
  },
  {
    id: 19,
    child: {
      id: 43,
      surname: "Андронік",
      name: "Олеся",
      fatherName: "Олесівна",
      birthDate: "2021-03-21T00:00:00.000+00:00",
      gender: "жін",
      birthDocument: "123123",
      address: {
        id: 52,
        region: "Чернівецька",
        city: "Чернівці",
        street: "Ірини Вільде",
        buildingNumber: "123",
        apartment: "123",
      },
      userParentOne: {
        id: 52,
        surname: "Андронік",
        name: "Андрій",
        fatherName: "Андрійович",
        birthDate: "2021-03-21T00:00:00.000+00:00",
        phone: "1234567890",
        mail: "mail@com",
        passportId: null,
        address: {
          id: 53,
          region: "Чернівецька",
          city: "Чернівці",
          street: "Ірини Вільде",
          buildingNumber: "123",
          apartment: "123",
        },
        login: null,
        password: null,
      },
      benefits: "є",
      status: "в черзі",
      userParentTwo: null,
      medicalDataId: 0,
      registerToGardenDate: "2021-04-19T18:18:52.000+00:00",
      cluster: {
        id: 3,
        name: "Молодша",
        kindergarten: {
          id: 1,
          number: 1,
          name: "ДНЗ ",
          address: {
            id: 54,
            region: "Чернівецька",
            city: "Чернівці",
            street: "Шевченка",
            buildingNumber: "18/20",
            apartment: null,
          },
        },
      },
    },
    kindergarten: {
      id: 1,
      number: 1,
      name: "ДНЗ ",
      address: {
        id: 54,
        region: "Чернівецька",
        city: "Чернівці",
        street: "Шевченка",
        buildingNumber: "18/20",
        apartment: null,
      },
    },
    applyDate: "2021-04-19T18:18:52.000+00:00",
  },
  {
    id: 20,
    child: {
      id: 44,
      surname: "Гешко",
      name: "Сергій",
      fatherName: "Іванович",
      birthDate: "2021-01-01T00:00:00.000+00:00",
      gender: "чоловіча",
      birthDocument: "єєє",
      address: {
        id: 57,
        region: "Чернівецька",
        city: "Чернівці",
        street: "вул. Руська, 15",
        buildingNumber: null,
        apartment: null,
      },
      userParentOne: {
        id: 53,
        surname: "Гешко",
        name: "Іван",
        fatherName: "Петрович",
        birthDate: "2021-01-01T00:00:00.000+00:00",
        phone: "0504444444",
        mail: "hjk@hkjjh",
        passportId: null,
        address: {
          id: 58,
          region: "Чернівецька",
          city: "Чернівці",
          street: "вул. Щепкіна, 9",
          buildingNumber: null,
          apartment: null,
        },
        login: null,
        password: null,
      },
      benefits: "ні",
      status: "в черзі",
      userParentTwo: null,
      medicalDataId: 0,
      registerToGardenDate: "2021-04-22T13:49:15.000+00:00",
      cluster: null,
    },
    kindergarten: {
      id: 1,
      number: 1,
      name: "ДНЗ ",
      address: {
        id: 54,
        region: "Чернівецька",
        city: "Чернівці",
        street: "Шевченка",
        buildingNumber: "18/20",
        apartment: null,
      },
    },
    applyDate: "2021-04-22T13:49:15.000+00:00",
  },
];
