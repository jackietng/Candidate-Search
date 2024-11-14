// TODO: Create an interface for the Candidate objects returned by the API
export interface Candidate {
    id: string; 
    username: string; 
    htmlUrl: string; 
    location: string; 
    email: string; 
    company: string; 
    bio: string;
    avatar: string; 
}

export interface CandidateResult {
    message?: string; 
    data?: Candidate[];  
}