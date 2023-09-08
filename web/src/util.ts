const isMobile:boolean = window.innerWidth < 900

const isDesktop:boolean = window.innerWidth > 900

const listen = ((event:any, callBack:any) => {
    if (event === 'resize') {
        window.addEventListener('resize', callBack)
    };

})

class com {
    'status': string
    'data': any
    constructor(status: string, data: any) {
        this.status = status;
        this.data = data;
    }
};

const location = (async():Promise<any>=>{
    const options = { enableHighAccuracy: true };
        try {
            let position: any = await new Promise((success, error) => {
                navigator.geolocation.getCurrentPosition(
                    success,
                    error,
                    options
                );
            });
            position = position.coords
            const lat = position.latitude;
            const lon = position.longitude;
            return [lat,lon];

        } catch (error:any) {
            console.log(`Error: ${error.code} Message: ${error.message}`);
        };
});
    
const toFahrenheit = (num: number): number => num * 1.8 + 32;


export {com , isMobile, listen, isDesktop, location, toFahrenheit}


