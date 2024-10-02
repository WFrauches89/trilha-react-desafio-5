import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://aaxbyikruootevafegob.supabase.co/rest/v1',
    headers: {
        apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFheGJ5aWtydW9vdGV2YWZlZ29iIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjc4ODUzNjgsImV4cCI6MjA0MzQ2MTM2OH0.vlhqFWp2vCE5-MLK9nZaWM3BGCD7xxGuzoBhIKFFQrk",
        authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFheGJ5aWtydW9vdGV2YWZlZ29iIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjc4ODUzNjgsImV4cCI6MjA0MzQ2MTM2OH0.vlhqFWp2vCE5-MLK9nZaWM3BGCD7xxGuzoBhIKFFQrk"
    }
})