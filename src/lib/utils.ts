import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { RawStudent, ProcessedStudent, GradClass } from "@/lib/types";
import { colleges } from "@/data/colleges";
import { majorToAreaMapping } from "@/data/majors";
import { PREDEFINED_MAJOR_AREAS } from "./constants";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

function normalizeForFilename(str: string): string {
  if (!str) return '';
  return str
      .toLowerCase()
      .replace(/[èé]/g, 'e')
      .replace(/\s+/g, '_')
      .replace(/[()']/g, '');
}

export function normalizeCollegeName(name: string): string {
    const originalNameLower = name.trim().toLowerCase();
    
    const mapping: Record<string, string> = {
        "bing": "Binghamton University",
        "ualbany": "University at Albany",
        "sbu": "Stony Brook University",
        "ccny": "City College of New York",
        "bmcc": "Borough of Manhattan Community College",
        "csi": "College of Staten Island",
        "ub": "University at Buffalo",
        "u rhode island": "University of Rhode Island",
        "maastricht": "Maastricht University",
        "ucsb": "University of California, Santa Barbara",
        "union": "Union College",
        "nyu shanghai": "NYU Shanghai",
        "nyu london": "NYU London",
        "mit": "Massachusetts Institute of Technology",
        "lafayette": "Lafayette College",
        "u washington": "University of Washington",
        "flordia state university": "Florida State University",
        "farifield university": "Fairfield University",
        "uflorida": "University of Florida",
        "uflordia": "University of Florida",
        "amda": "AMDA College of the Performing Arts"
    };

    if (mapping[originalNameLower]) return mapping[originalNameLower];

    // Partial matches
    const partials: [string, string][] = [
        ["harvard", "Harvard University"],
        ["hobart and william smith colleges", "Hobart and William Smith Colleges"],
        ["bates", "Bates College"],
        ["brooklyn college", "Brooklyn College"],
        ["yale", "Yale University"],
        ["arizona state university", "Arizona State University"],
        ["muhlenberg", "Muhlenberg College"],
        ["hostos", "Hostos Community College"],
        ["columbia", "Columbia University"],
        ["occidental", "Occidental College"],
        ["bentley", "Bentley University"],
        ["davidson", "Davidson College"],
        ["molloy", "Molloy University"],
        ["rutgers", "Rutgers University"],
        ["pratt", "Pratt Institute"],
        ["fordham", "Fordham University"],
        ["brown", "Brown University"],
        ["dartmouth", "Dartmouth College"],
        ["tufts", "Tufts University"],
        ["northwestern", "Northwestern University"],
        ["syracuse", "Syracuse University"],
        ["brandeis", "Brandeis University"],
        ["middlebury", "Middlebury College"],
        ["hamilton", "Hamilton College"],
        ["emerson", "Emerson College"],
        ["emory", "Emory University"],
        ["pace", "Pace University"],
        ["williams", "Williams College"],
        ["bard", "Bard College"],
        ["barnard", "Barnard College"],
        ["ithaca", "Ithaca College"],
        ["vassar", "Vassar College"],
        ["haverford", "Haverford College"],
        ["smith", "Smith College"],
        ["oberlin", "Oberlin College"],
        ["cornell", "Cornell University"],
        ["vanderbilt", "Vanderbilt University"],
        ["princeton", "Princeton University"],
        ["duke", "Duke University"],
        ["tulane", "Tulane University"],
        ["bucknell", "Bucknell University"],
        ["skidmore", "Skidmore College"],
        ["babson", "Babson College"],
        ["colgate", "Colgate University"],
        ["towson", "Towson University"],
        ["boston college", "Boston College"],
        ["boston u", "Boston University"],
        ["georgetown", "Georgetown University"],
        ["baruch", "Baruch College"],
        ["hunter", "Hunter College"],
        ["upenn", "University of Pennsylvania"],
        ["u penn", "University of Pennsylvania"],
        ["washu", "Washington University in St. Louis"],
        ["umich", "University of Michigan"],
        ["neu", "Northeastern University"],
        ["mcgill", "McGill University"],
        ["nyu", "New York University"],
        ["usc", "University of Southern California"],
        ["ucla", "University of California, Los Angeles"],
        ["ucsd", "University of California San Diego"],
        ["uc berkeley", "University of California, Berkeley"],
        ["rit", "Rochester Institute of Technology"],
        ["uvm", "University of Vermont"],
        ["u colorado boulder", "University of Colorado Boulder"],
        ["howard", "Howard University"],
        ["uw madison", "University of Wisconsin-Madison"],
        ["umass amherst", "University of Massachusetts Amherst"],
        ["penn state", "Pennsylvania State University"],
        ["florida state university", "Florida State University"],
        ["johns hopkins", "Johns Hopkins University"],
        ["john hopkins", "Johns Hopkins University"],
        ["cooper union", "The Cooper Union"],
        ["uva", "University of Virginia"],
        ["upitt", "University of Pittsburgh"],
        ["uarizona", "University of Arizona"],
        ["us naval academy", "United States Naval Academy"],
        ["case western", "Case Western Reserve University"],
        ["gwu", "George Washington University"],
        ["urochester", "University of Rochester"],
        ["wpi", "Worcester Polytechnic Institute"],
        ["indiana university", "Indiana University Bloomington"],
        ["indiania university", "Indiana University Bloomington"],
        ["university of washington", "University of Washington"],
        ["umaryland college park", "University of Maryland, College Park"],
        ["u maryland college park", "University of Maryland, College Park"],
        ["fairfield university", "Fairfield University"],
        ["umiami", "University of Miami"],
        ["university of florida", "University of Florida"],
        ["uchicago", "University of Chicago"],
        ["carnegie mellon", "Carnegie Mellon University"],
        ["st andrews", "University of St Andrews"],
        ["purdue", "Purdue University"],
        ["fit", "Fashion Institute of Technology"],
        ["university of the highlands and islands", "University of the Highlands and Islands"],
        ["osu", "Ohio State University"],
        ["ohio state", "Ohio State University"]
    ];

    for (const [key, val] of partials) {
        if (originalNameLower.includes(key)) return val;
    }

    // Direct lookup in college list
    for (const key in colleges) {
        if (key.toLowerCase() === originalNameLower) return key;
    }

    // Suffix stripping
    let baseName = name;
    const posseMatch = name.match(/\s*\(posse\)/i);
    const questbridgeMatch = name.match(/\s*\(questbridge\)/i);
    const macaulayMatch = name.match(/\s*\(macaulay\)/i);

    if (posseMatch) baseName = name.replace(posseMatch[0], '').trim();
    else if (questbridgeMatch) baseName = name.replace(questbridgeMatch[0], '').trim();
    else if (macaulayMatch) baseName = name.replace(macaulayMatch[0], '').trim();

    if (baseName !== name) {
        const normalizedBase = normalizeCollegeName(baseName);
        if (colleges[normalizedBase]) return normalizedBase;
        return baseName;
    }

    return name;
}

function getMajorArea(specificMajor: string): string {
    if (!specificMajor) return "Unknown";

    const lowerSpecificMajor = specificMajor.toLowerCase().trim();
    if (["", "undecided", "undecided major", "n/a", "exploratory"].includes(lowerSpecificMajor)) {
        return "Undecided/Other";
    }

    let mappedArea = majorToAreaMapping[lowerSpecificMajor];

    // Refine STEM bucket into sub-areas when possible
    if (mappedArea === "STEM") {
        if (lowerSpecificMajor.includes("computer science") || lowerSpecificMajor === "cs") {
            mappedArea = "Computer Science";
        } else if (lowerSpecificMajor.includes("information technology") || lowerSpecificMajor === "it") {
            mappedArea = "IT";
        } else if (lowerSpecificMajor.includes("statistics")) {
            mappedArea = "Statistics";
        } else if (lowerSpecificMajor.includes("math")) {
            mappedArea = "Mathematics";
        } else if (lowerSpecificMajor.includes("physics") || lowerSpecificMajor.includes("chemistry")) {
            mappedArea = "Physical Sciences";
        } else if (lowerSpecificMajor.includes("biology") || lowerSpecificMajor.includes("neuroscience") || lowerSpecificMajor.includes("biochem")) {
            mappedArea = "Life Sciences";
        }
    }

    if (mappedArea) return mappedArea;

    // Heuristic matching
    if (lowerSpecificMajor.includes('&') || lowerSpecificMajor.includes(' and ')) {
        return "Other"; // Simplified for brevity, can expand if needed
    }
    
    // Fallback keywords
    if (lowerSpecificMajor.includes("engineering")) return "Engineering";
    if (lowerSpecificMajor.includes("computer science") || lowerSpecificMajor === "cs") return "Computer Science";
    if (lowerSpecificMajor.includes("information technology") || lowerSpecificMajor === "it") return "IT";
    if (lowerSpecificMajor.includes("business") || lowerSpecificMajor.includes("finance")) return "Business/Economics";
    if (lowerSpecificMajor.includes("art") || lowerSpecificMajor.includes("design")) return "Arts/Design";
    if (lowerSpecificMajor.includes("communication")) return "Communications";
    if (lowerSpecificMajor.includes("journalism")) return "Journalism";
    if (lowerSpecificMajor.includes("biology") || lowerSpecificMajor.includes("health")) return "Life Sciences";
    if (lowerSpecificMajor.includes("math")) return "Mathematics";
    if (lowerSpecificMajor.includes("physics") || lowerSpecificMajor.includes("chemistry")) return "Physical Sciences";

    return "Other";
}

export function parseRawData(jsonData: RawStudent[]): ProcessedStudent[] {
    const rawEntries = jsonData.map(entry => ({
        seniorName: entry.name.trim(),
        collegeNameRaw: entry.college.trim(),
        major: (entry.major && entry.major.trim() !== "") ? entry.major.trim() : "Undecided Major",
        gradClass: `'${entry.classYear.trim()}` as GradClass,
        originalFirstName: entry.name.trim().split(/\s+/)[0],
        linkedin: (entry.linkedin && entry.linkedin.trim() !== "") ? entry.linkedin.trim() : undefined,
        instagram: (entry.instagram && entry.instagram.trim() !== "") ? entry.instagram.trim() : undefined,
        github: (entry.github && entry.github.trim() !== "") ? entry.github.trim() : undefined,
        congratsCaption: (entry.congratsCaption && entry.congratsCaption.trim() !== "") ? entry.congratsCaption.trim() : undefined,
    }));

    // Handle duplicate first names in a grad class
    const firstNameCountsByClass = new Map<string, Map<string, number>>();
    for (const entry of rawEntries) {
        if (!firstNameCountsByClass.has(entry.gradClass)) {
            firstNameCountsByClass.set(entry.gradClass, new Map());
        }
        const classCounts = firstNameCountsByClass.get(entry.gradClass)!;
        const normName = normalizeForFilename(entry.originalFirstName);
        classCounts.set(normName, (classCounts.get(normName) || 0) + 1);
    }

    return rawEntries.map((entry, index) => {
        const photoYear = entry.gradClass.replace("'", "");
        const normFirstName = normalizeForFilename(entry.originalFirstName);
        const classCounts = firstNameCountsByClass.get(entry.gradClass)!;
        const honoraries: string[] = [];
        const rawLower = entry.collegeNameRaw.toLowerCase();
        if (rawLower.includes("(questbridge)")) honoraries.push("questbridge");
        if (rawLower.includes("(posse)")) honoraries.push("posse");
        if (rawLower.includes("(dean scholars)")) honoraries.push("dean_scholars");
        if (rawLower.includes("(macaulay)")) honoraries.push("macaulay");
        
        let photoFilename = normFirstName;
        if (classCounts.get(normFirstName)! > 1) {
            photoFilename = normalizeForFilename(entry.seniorName);
        }

        // Images live in public/<gradYear>/<filename>.{jpg,png}
        const seniorPhotoUrlBase = `/${photoYear}/${photoFilename}`;
        const normalizedNameKey = normalizeCollegeName(entry.collegeNameRaw);
        const collegeDetails = colleges[normalizedNameKey] || colleges["Generic College"];

        // Derive locationFocus when not provided in data
        let locationFocus = collegeDetails.locationFocus;
        if (!locationFocus) {
            if (collegeDetails.stateOrCountry === 'NY') {
                const inNYC = collegeDetails.lat >= 40.47 && collegeDetails.lat <= 40.92 &&
                              collegeDetails.lng >= -74.26 && collegeDetails.lng <= -73.70;
                locationFocus = inNYC ? "InCityNYC" : "InStateNYOther";
            } else if (collegeDetails.stateOrCountry && collegeDetails.stateOrCountry.length === 2) {
                locationFocus = "OutOfStateUS";
            } else {
                locationFocus = "International";
            }
        }

        // Derive isCampusPublic when not provided
        let isCampusPublic = collegeDetails.isCampusPublic;
        if (typeof isCampusPublic === 'undefined') {
            const t = (collegeDetails.type || '').toLowerCase();
            isCampusPublic = t.includes('public') || t.includes('suny') || t.includes('cuny') || t.includes('university system');
        }

        let finalCollegeName = collegeDetails.name;
        if (collegeDetails.name === "Generic College" && normalizedNameKey !== "Undecided") {
            finalCollegeName = normalizedNameKey;
        }
        if (normalizedNameKey === "Undecided") finalCollegeName = "Undecided";

        return {
            id: index,
            originalIndex: index,
            seniorName: entry.seniorName,
            gradClass: entry.gradClass,
            collegeName: finalCollegeName,
            collegeKey: normalizedNameKey,
            collegeNameRaw: entry.collegeNameRaw,
            major: entry.major,
            majorArea: getMajorArea(entry.major),
            lat: collegeDetails.lat,
            lng: collegeDetails.lng,
            collegeType: collegeDetails.type,
            collegeImageUrl: collegeDetails.imageUrl,
            collegeHomepageUrl: collegeDetails.homepageUrl,
            isCampusPublic: !!isCampusPublic,
            locationFocus: locationFocus || "N/A",
            stateOrCountry: collegeDetails.stateOrCountry,
            seniorPhotoUrl: `${seniorPhotoUrlBase}.jpg`,
            seniorPhotoUrlPng: `${seniorPhotoUrlBase}.png`,
            linkedInUrl: entry.linkedin,
            instagramUrl: entry.instagram,
            githubUrl: entry.github,
            bioCaption: entry.congratsCaption,
            isIndividuallyVisible: true,
            isVisible: true,
            honoraries
        };
    });
}
