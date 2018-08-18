import * as request from "request";
import {User} from "./User";
import {Repo} from "./Repo";

const OPTIIONS: any = {
			headers: {
				'User-Agent': 'request'
			},
			json: true // body is a string there for need to pass jason like  json.parse
		}

export class GithubApiService{

	getUserInfo(userName: string, cb:(user:User) => any)
	{
		
		request.get('https://api.github.com/users/' + userName, OPTIIONS, (error: any, response: any, body:any) =>{
			
			let user = new User(body);
			//console.log(user);
			cb(user)
		} );
	}

	getRepos(userName: string, cb:(repos:Repo[]) => any)
	{
		request.get('https://api.github.com/users/' + userName+'/repos', OPTIIONS, (error: any, response: any, body:any) =>{
			
			//let repoArray = body;
			let repos =  body.map( (repo:any)=>new Repo(repo));
			//console.log(user);
			cb(repos);
		} );
	}


}