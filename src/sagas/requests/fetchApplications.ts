const url = "https://home.devisland.io/applications";
const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6Im5PbzNaRHJPRFhFSzFqS1doWHNsSFJfS1hFZyJ9.eyJhdWQiOiI5NmUzNWE5Yi04YjM5LTRjY2UtYTAzZC1kMDZjZTczZTljYzUiLCJpc3MiOiJodHRwczovL2xvZ2luLm1pY3Jvc29mdG9ubGluZS5jb20vNTdkY2RhN2UtNWU5ZS00MDcyLWE3NzAtMTQ3MmI2NzcwOGZiL3YyLjAiLCJpYXQiOjE2Mjg3NzE4OTAsIm5iZiI6MTYyODc3MTg5MCwiZXhwIjoxNjI4Nzc1NzkwLCJhaW8iOiJBVFFBeS84VEFBQUFzWTRReVdEVVNZM3lrQXdqdFE0YytMUVhTS1RiVVhDemgwQXJFWERaMktMNVVFV1hqOHJXMjNzaTVTTERKRnExIiwiYXpwIjoiZDFkYjYwYmMtZThmMS00ZTJmLWEwMTItYTYwODRjNjlhYTQ5IiwiYXpwYWNyIjoiMCIsIm5hbWUiOiJEYW1hcmlzIEfDtmJlbCIsIm9pZCI6IjQ3NzYwNjVjLTk3Y2UtNDM0MS04YTUwLWIyYmY5ODIwZmU1YiIsInByZWZlcnJlZF91c2VybmFtZSI6ImQ0bWFyaXNAZGV2aXNsYW5kLmRlIiwicmgiOiIwLkFUa0FmdHJjVjU1ZWNrQ25jQlJ5dG5jSS03eGcyOUh4NkM5T29CS21DRXhwcWtrNUFDZy4iLCJzY3AiOiJhY2Nlc3NfYXNfdXNlciIsInN1YiI6IjMyOFdjSWZTY2gtZFNySWItTWVTR0V6NkEtaTgyN09lMGF1R1NPWk0xejAiLCJ0aWQiOiI1N2RjZGE3ZS01ZTllLTQwNzItYTc3MC0xNDcyYjY3NzA4ZmIiLCJ1dGkiOiJWX01PSTdWd3lFU0VmUnpBRUV5VkFRIiwidmVyIjoiMi4wIn0.a8dipXJ2O9dxkM0TEeKbvlcCW72hGMZcIGLwJAfqewEmUASLE5vC0HxUnbBfqKfRkXls1OepLcZ_eiHSAVN2sI2Ly4416BV8iC0PkUr-0dwGjMC1FCVszHNnvsMr3vyMuBMcushN0-7cIpVSxMMQel3ZW_W8-1PsUssEkJID8ifpgSvksYCDNh8h2Bczps1uXh-vfTgSr18od7l1WjjqASx2fCu6x74SLFmcL-RM1vNUNcoaz299NmUuYt0fjgeCX07uY9s0K0XIWIJPTgzzX7jehDW4RnEuDcJ_LnBscDAYzkF2NT1mHT_p7HzmbVQ0b7KeyfeOq8n1B30psu5etw'


const fetchGetApplications = () => {
    return fetch(url, {
        method: "GET",
        headers: {
            Authorization: "Bearer " + token,
            Accept: '*/*',
            "Content-Type": 'application/json'
        }
    })
        .then((response) => response.json())
        .catch((error) => {
            throw error;
        });
};

export default fetchGetApplications;