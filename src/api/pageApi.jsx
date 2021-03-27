export default {
    contact: (data) => {
        return fetch('http://cfd-reactjs.herokuapp.com/elearning/v4/contact', {
            method: 'POST',
            headers: {
                'Context-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(res => res.json())
    }
}