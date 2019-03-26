export const getRandomNum = (min, max) => {
    const number = Math.floor(Math.random() * max) + min;

    return number;
}