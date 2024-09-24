// Clone Experience
export interface Experience {
  description: string;
  impact: number; // Degree of influence on future behavior
  date: Date;
}

// Mutable Traits
export interface MutableTraits {
  mood: string;
  currentGoals: string[];
  events: string[];
  experiences: Experience[];
}

// Clone Skills
export interface Skills {
  name: string;
  execute(): void;  // Method to execute the skill
}

export interface CloneProfile {
  name: string;
  gender: string;
  age: number;
  location: string;
  occupation: string;
  personaSummary: string;
  coreValues: string[];
  mutableTraits: MutableTraits;
  skills: Skills[];
}

export class Clone {
  profile: CloneProfile;

  constructor(profile: CloneProfile) {
    this.profile = profile;
  }

  updateTraits(newTraits: Partial<MutableTraits>) {
    // Update mutable traits
    this.profile.mutableTraits = { ...this.profile.mutableTraits, ...newTraits };
  }

  triggerSkill(skillName: string): void {
    const skill = this.profile.skills.find((s) => s.name === skillName);
    if (skill) {
      skill.execute();
    } else {
      throw new Error("Skill not found.");
    }
  }

  addExperience(experience: Experience) {
    this.profile.mutableTraits.experiences.push(experience);
  }

  getProfile(): CloneProfile {
    return this.profile;
  }
}
