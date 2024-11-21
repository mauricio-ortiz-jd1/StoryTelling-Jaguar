var config = {
    style: 'mapbox://styles/mapbox/streets-v11',
    accessToken: 'pk.eyJ1IjoibWF1b3J0aXoiLCJhIjoiY20zcHdpcmJ6MGlpbjJwb3A3c2szdGlwYyJ9.f8BE907c0zB1xN8QXzopgw',
    showMarkers: false,
    theme: 'dark',
    use3dTerrain: true,
    title: 'Jaguar Siembra - Sierra Nevada de Santa Marta',
    subtitle: 'Te mostramos nuestro trabajo',
    byline: '',
    footer: 'Jaguar Siembra - Todos los derechos reservados',
    chapters: [
        {
            id: 'introduction',
            alignment: 'full',
            title: 'Sierra Nevada - Introducción',
            image: 'https://cdn.shopify.com/s/files/1/0693/6874/2045/files/Mountain-down.png?v=1731597280',
            description: 'Esta es la Sierra Nevada de Santa Marta',
            location: {
                center: [-73.61323, 10.74815],
                zoom: 5,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [
                {
                    layer: 'gnpglaciers-1998',
                    opacity: 0.25
                },
                {
                    layer: 'glaciernp-boundary',
                    opacity: 0.25
                }
            ],
            onChapterExit: [
                {
                    layer: 'glaciernp-boundary',
                    opacity: 0
                }
            ]
        },
        {
            id: 'harrison1998',
            alignment: 'left',
            title: 'Sierra Nevada',
            image: '',
            description: 'Esta es la sierra nevada',
            location: {
                center: [-73.61323, 10.74815],
                zoom: 9,
                pitch: 150.00,
                bearing: 57
            },
            onChapterEnter: [],
            onChapterExit: [
                // {
                //     layer: 'gnpglaciers-2015',
                //     opacity: 0
                // }
            ]
        }
    ]
}
