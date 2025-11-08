// Define MajorCredits interface with a brand
interface MajorCredits {
  credits: number;
  _majorBrand: "MajorCredits"; // Brand property to make this type unique
}

// Define MinorCredits interface with a brand
interface MinorCredits {
  credits: number;
  _minorBrand: "MinorCredits"; // Brand property to make this type unique
}

// Function to sum MajorCredits
function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    _majorBrand: "MajorCredits",
  };
}

// Function to sum MinorCredits
function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    _minorBrand: "MinorCredits",
  };
}

// Example usage (optional, for testing)
const major1: MajorCredits = { credits: 3, _majorBrand: "MajorCredits" };
const major2: MajorCredits = { credits: 4, _majorBrand: "MajorCredits" };

const minor1: MinorCredits = { credits: 2, _minorBrand: "MinorCredits" };
const minor2: MinorCredits = { credits: 1, _minorBrand: "MinorCredits" };

console.log(sumMajorCredits(major1, major2)); // { credits: 7, _majorBrand: "MajorCredits" }
console.log(sumMinorCredits(minor1, minor2)); // { credits: 3, _minorBrand: "MinorCredits" }
