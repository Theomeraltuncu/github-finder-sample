export class Github {
    constructor(){
        this.client_id = "1e316e6240fdac39a55b"
        this.client_secret = "a4d96b34b59d6aeb5febec15e3e27947cd4da07e"
        this.per_page = 10;
        this.sort = "asc"
    }

    async fetchUserData(username){
      const profileRes = await fetch(
        `https://api.github.com/users/${username}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        
        const repoRes = await fetch(
        `https://api.github.com/users/${username}/repos?client_id=${this.client_id}&client_secret=${this.client_secret}&per_page=${this.per_page}&sort=${this.sort}`)

            

        const data = await profileRes.json();
        const repos = await repoRes.json();

        console.log(repos)
        return {data, repos};
    }
    
}