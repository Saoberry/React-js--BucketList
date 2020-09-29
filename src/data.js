const POSTS = [
    { 
        id: 0, 
        country: 'France',
        show : false,
        places: [
        {
            placeID: 0,
            title: "Maison", 
            content: "C'est ma maison", 
            city: 'Paris',
            coord:{
                lat: 48.915963, 
                lng: 2.290117
            },
        },
        {
            placeID: 1,
            title: "Chez Toto & Julie", 
            content: "C'est la maison de Toto", 
            city: 'Livry-Gargan',
            coord:{
                lat: 48.925398,  
                lng: 2.545320
            },
        }]
    },
    { 
        id: 1, 
        country: 'Islande',
        show : false,
        places: [
        {
            placeID: 0,
            title: "Chez Inga", 
            content: "C'est Chez Inga", 
            city: 'Reykjavik',
            coord:{
                lat: 64.142984, 
                lng: -21.947314
            },
        }]
    },
  ];

  export default POSTS