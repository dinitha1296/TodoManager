const toDateString = date => {
    // console.log(date);
    const now = new Date();
    if (
        now.getFullYear() !== date.getFullYear() ||
        now.getMonth() !== date.getMonth() ||
        now.getDate() !== date.getDate()
    ) {
        return `${date.toLocaleDateString('en-GB').split(',')[0]}, ${getHNM(
            date,
        )}`;
    }
    if (now.getHours() !== date.getHours()) {
        return `${getHNM(date)}`;
    }
    if (now.getMinutes() !== date.getMinutes()) {
        return `${now.getMinutes() - date.getMinutes()} minutes ago`;
    }
    return 'Just now';
};

const getHNM = date => {
    const h = date.getHours();
    const m = date.getMinutes();
    return `${h < 10 ? '0' : ''}${h}:${m < 10 ? '0' : ''}${m}`;
};
export {getHNM};
export default toDateString;
