export const postdata = () => {
    fetch('http://localhost:3000/main.json')
        .then(response => response.json())
        .then(data => {
            return {
                type: 'GET_DATA_ARRAY',
                payload: data,
            }
        });
}