# Title
Project:
Authors:
Date:


## Project Overview
[Provide a brief description of the Gym Betting application and its purpose]

## Tech Stack
- **Frontend**: [List frontend technologies]
- **Backend**: [List backend technologies]
- **Database**: [List database technology]

## Project Structure
```
[Provide a basic project structure diagram]
```

## Features
### MVP (Minimum Viable Product)
1. **Personal Challenge**
   - Creates a closed challenge that friends can bet under or over 
   - The user can get commissions on how many people bet on them
   - Each user has their own profiles with their own stats for more info
   - Verified by the betters if proof is a valid submission

2. **Duo: Head to Head Comps**
   - Typically to deal with more consistency like who can go to the gym consitently etc.
   - For now, bet who can win between the two

3. **[Feature 3]**
   - [Sub-feature]
   - [Sub-feature]

## Database Schema
### User Profile
```json
{
  "Name": "String",
  "Friends": "Array[Objects]",
  "Height": "number",
  "Weight": "number",
  "Bets Won": "number",
  "Bets Lost": "number",
  "Bench PR": "number",
  "Squat PR": "number",
  "Deadlift PR": "number",
  "Bets": "Array[Bet objects]",
}
```

### SetBet
```json
{
  "Bet Title": "String",
  "Bet Specifications": "String",
  "Type of Bet": "String",
  "Line": "number",
  "Type of Expiration": "Time",
  "Betters":"Array[Objects of users]",
  "Active": "Boolean"
}
```

### Gamble
```json
{
  "Amount gamble": "number",
  "Payout": "number",
  "Time of Expiration": "Time",
  "": "type",
  "": "type",
  "": "type",
  "Active": "Boolean"
}
```

## API Endpoints
### [Category 1]
##### GET, DELETE, POST
- `POST /api/[place:betid]` - [Takes bet id within the data based on place bet, and places it for that specific user]
- `[POST /api/[place:betproof]` - [mp4 video proof of completing the challenge]

## Frontend Pages
1. **[Home]**
   - Place bet button
   - Create new challenge button
   - Challenges
      - profile link
      
2. **[Friends]**
   - Add friend button
   - 

3. **[Profile]**
   - Edit profile button
   - Profile cards

## UI Components
1. **[Component 1]**
   - [Description]

2. **[Component 2]**
   - [Description]

## Development Workflow
1. **[Step 1]**
   - [Task]

2. **[Step 2]**
   - [Task]

## Getting Started Guide
### Prerequisites
- [Prerequisite 1]
- [Prerequisite 2]

### Backend Setup
```bash
[Backend setup commands]
```

### Frontend Setup
```bash
[Frontend setup commands]
```

## Learning Resources
- [Resource 1](link)
- [Resource 2](link)

## Future Enhancements
1. **[Enhancement 1]**
   - [Description]

2. **[Enhancement 2]**
   - [Description]