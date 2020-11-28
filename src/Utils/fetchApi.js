import {postDataUrl, getDataUrl, deleteDataUrl, updateDataUrl, crudUrlPython, getDataUrlPython} from '../Config/urls';

const sendData = async(formData) => {

    try {
        
        return await fetch(crudUrlPython, {
        // return await fetch(postDataUrl, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then((response) => response.json())
        

    } catch (error) {
        console.log(error);
    }

}

const getData = async() => {

    try {
        
        return await fetch(getDataUrlPython)
        // return await fetch(getDataUrl)
            .then(response => response.json())

    } catch (error) {
        console.log(error);
    }

}

const updateData = async(id, formData) => {

    try {
        
        return await fetch(`${crudUrlPython}/${id}`, {
        // return await fetch(`${updateDataUrl}/${id}`, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then((response) => response.json())
        

    } catch (error) {
        console.log(error);
    }

}

const deleteData = async(id) => {

    try {

        return await fetch(`${crudUrlPython}/${id}`, {
        // return await fetch(`${deleteDataUrl}/${id}`, {
            method: 'DELETE'
        })
        .then(response => response.json())
        
    } catch (error) {

        console.log(error);
        
    }

}

export {
    sendData,
    getData,
    deleteData,
    updateData
}