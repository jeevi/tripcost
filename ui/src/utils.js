export const getHeaders = data => {
    return data.length ? Object.keys(data[0]).filter(key => key !== "_id") : [];
};