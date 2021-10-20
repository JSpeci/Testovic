export class ApiServiceBase {

    private baseUrl: string = window.location.protocol + "//" + window.location.host + "/";
  
    private getHeaders(token: string | undefined): Headers {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Token", token || "");
        return myHeaders;
    }

    public async makeApiRequest(url: string, token: string | undefined, body?: any): Promise<any> {
        const querySring = this.baseUrl + url;
        const myInit = {
            method: 'POST',
            headers: this.getHeaders(token),
            body: JSON.stringify(body),
        };
        return fetch(querySring, myInit).then((response) => {
            return response.json();
        })
            .catch(error => {
                console.error(error);
            });
    } 
}