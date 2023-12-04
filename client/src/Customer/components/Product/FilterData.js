export const color = [
    "white",
    "Black",
    "Red",
    "marun",
    "Being",
    "Pink",
    "Green",
    "Yellow"
];

export const filter = [

    {
        id:"color",
        name: "Color",
        options : [
            {value : "white", label : "White"},
            {value : "beige", label : "Beige"},
            {value : "blue", label : "Blue"},
            {value : "brown", label : "Brown"},
            {value : "green", label : "Green"},
            {value : "purple", label : "Purple"},
            {value : "yellow", label : "Yellow"},
        ]
    },
    {
        id:'size',
        name: 'Size',
        options : [
            {value : 'S', label : 'S'},
            {value : 'M', label : 'M'},
            {value : 'L', label : 'L'},
        ],

    },
]
export const singleFilter= [

    {
        id: "price",
        name: "Price",
        options: [
            {value : "159-399" , label: "159 to 399"},
            {value : "359-999" , label: "359 to 999"},
            {value : "999-1999" , label: "999 to 1999"},
            {value : "1999-2999" , label: "1999 to 2999"},
            {value : "3999-4999" , label: "3999 to 4999"},

        ],
    }, {
        id:"stock",
        name :"Availability",
        options: [
            {value : "InStock" , label: "In Stock"},
            {value : "OutStock" , label: "Out of Stock"},
        ]
    }


]