// Завдання 2

// У вас є тип AllType. Існує функція compare, яка приймає два об'єкти. Ці об'єкти містять поля AllType. Ваше завдання – використовувати Pick та generics для вказівки, що поля цих параметрів належать AllType. Функція compare повинна повертати AllType.

type AllType = {
    name: string;
    position: number;
    color: string;
    weight: number;
}

function compare(
    top: Pick<AllType, 'name' | 'color'>,
    bottom: Pick<AllType, 'position' | 'weight'>
): AllType {
    return {
      name: top.name,
      color: top.color,
      position: bottom.position,
      weight: bottom.weight,
    };
}
  

const result = compare(
    { name: 'Max', color: 'red' },      
    { position: 1, weight: 100 }        
);
  