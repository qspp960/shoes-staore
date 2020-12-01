const brands = [
    {
        "_id" : 1,
        "name": "Nike"
    },
    {
        "_id" : 2,
        "name": "Adidas"
    },
    {
        "_id" : 3,
        "name": "New balance"
    },
    {
        "_id" : 4,
        "name": "Converse"
    },
    {
        "_id" : 5,
        "name": "Reebok"
    }
]

const price = [
    {
        "_id": 0,
        "name": "Any",
        "array": []
    },
    {
        "_id": 1,
        "name": "$0 to $199",
        "array": [0,199]
    },
    {
        "_id": 2,
        "name": "$200 to $249",
        "array": [200,249]
    },
    {
        "_id": 3,
        "name": "$250 to $279",
        "array": [250,279]
    },
    {
        "_id": 4,
        "name": "$280 to $299",
        "array": [280,299]
    },
    {
        "_id": 5,
        "name": "More than $300",
        "array": [300,150000]
    }
]
export {
    brands,
    price
}