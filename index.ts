import { Clone, CloneProfile } from './clone';
import { createClone } from './api';

// Create a new clone profile
const cloneProfile: CloneProfile = {
  name: 'Aria Novelle',
  gender: 'Female',
  age: 24,
  location: 'Nashville',
  occupation: 'Musician',
  personaSummary: 'A spontaneous and creative singer-songwriter',
  coreValues: ['Creativity', 'Independence', 'Ambition'],
  mutableTraits: {
    mood: 'Excited',
    currentGoals: ['Finish album'],
    events: ['Concert on 15th'],
    experiences: []
  },
  skills: [
    {
      name: 'GenerateImage',
      execute: () => console.log('Generating image...')
    }
  ]
};

// Create a new clone object
const newClone = new Clone(cloneProfile);

// Trigger a skill (TBD if this is how we do it)
newClone.triggerSkill('GenerateImage');

// Send the clone profile to the API
(async () => {
  const createdClone = await createClone(cloneProfile);
  console.log('Created clone:', createdClone);
})();
