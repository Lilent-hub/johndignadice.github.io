/**
 * STORAGE.JS - Data Loading & LocalStorage Management
 *
 * This module handles:
 * - Initializing portfolio data from defaults
 * - Persisting and merging localStorage edits
 * - Retrieving merged data for rendering
 */

const DEFAULT_PORTFOLIO_DATA = {
  profile: {
    fullName: "John Andrie S. Dignadice",
    title: "Virtual Assistant (Admin & CRM Support)",
    email: "johnandrie.dignadice06@gmail.com",
    profileImage: "images/profile.jpg",
    profileImagePosition: { x: 0, y: 0, scale: 1 },
    bio: "I help businesses stay organized, responsive, and on track by handling administrative and CRM tasks that take up your time.",
    social: [
      { platform: "LinkedIn", url: "#", icon: "linkedin" },
      { platform: "GitHub", url: "#", icon: "github" },
      {
        platform: "Email",
        url: "mailto:johnandrie.dignadice06@gmail.com",
        icon: "email",
      },
    ],
    background: "",
  },
  about: [
    {
      type: "paragraph",
      text: "Experienced virtual assistant focused on administrative support, CRM management, and business operations.",
    },
    {
      type: "paragraph",
      text: "I help clients stay efficient by managing workflows, communication, and data with a polished, reliable approach.",
    },
    {
      type: "list",
      items: [
        "CRM organization",
        "Client communication",
        "Data entry and reporting",
        "Task coordination",
      ],
    },
  ],
  projects: [],
  skills: [],
  experience: [],
  education: [],
  settings: {
    adminPassword: "admin123",
  },
};

let portfolioData = { ...DEFAULT_PORTFOLIO_DATA };
const STORAGE_KEY = "portfolio_edits";
const FILTER_KEY = "portfolio_filters";

/**
 * Load initial data from defaults.
 * Returns: Promise<Object> - Default portfolio data
 */
async function loadData() {
  portfolioData = { ...DEFAULT_PORTFOLIO_DATA };
  console.log("✓ Initialized default portfolio data");
  return portfolioData;
}

/**
 * Get all edits from localStorage
 * Returns: Object - All edits stored in localStorage
 */
function getStorageEdits() {
  const stored = localStorage.getItem(STORAGE_KEY);
  return stored ? JSON.parse(stored) : {};
}

/**
 * Save edits to localStorage
 * Params: edits (Object) - Edits to save
 */
function saveEdits(edits) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(edits));
  console.log("✓ Edits saved to localStorage:", edits);
}

/**
 * Get a specific field value (merged: JSON + localStorage override)
 * Params: path (String) - Field path (e.g., "profile.fullName")
 * Returns: Any - The value from localStorage if edited, otherwise from JSON
 */
function getFieldValue(path) {
  const edits = getStorageEdits();
  const keys = path.split(".");

  let value = edits;
  for (let key of keys) {
    value = value?.[key];
  }

  if (value !== undefined && value !== null) {
    return value;
  }

  // Fall back to original data
  value = portfolioData;
  for (let key of keys) {
    value = value?.[key];
  }

  return value;
}

/**
 * Update a specific field (saves to localStorage)
 * Params: path (String), newValue (Any)
 */
function updateField(path, newValue) {
  const edits = getStorageEdits();
  const keys = path.split(".");
  const lastKey = keys.pop();

  let obj = edits;
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    const nextKey = keys[i + 1];
    const isNextIndex = !isNaN(Number(nextKey));
    const isCurrentIndex = Array.isArray(obj) || !isNaN(Number(key));

    if (isCurrentIndex) {
      const index = Number(key);
      if (!Array.isArray(obj)) {
        obj = []; // should not happen, but recover
      }
      if (obj[index] === undefined) {
        obj[index] = isNextIndex ? [] : {};
      }
      if (i < keys.length - 1) {
        obj = obj[index];
      }
    } else {
      if (obj[key] === undefined || obj[key] === null) {
        obj[key] = isNextIndex ? [] : {};
      }
      if (i < keys.length - 1) {
        obj = obj[key];
      }
    }
  }

  if (Array.isArray(obj) && !isNaN(Number(lastKey))) {
    obj[Number(lastKey)] = newValue;
  } else {
    obj[lastKey] = newValue;
  }
  saveEdits(edits);
}

/**
 * Get merged data (defaults + localStorage edits)
 * Returns: Object - Complete portfolio data with edits applied
 */
function getMergedData() {
  const edits = getStorageEdits();

  // Deep merge function - arrays are replaced, not merged item-wise
  function merge(original, edits) {
    if (Array.isArray(edits)) {
      return edits;
    }
    if (Array.isArray(original)) {
      return original;
    }

    const result = { ...original };

    for (let key in edits) {
      if (
        edits[key] !== null &&
        typeof edits[key] === "object" &&
        !Array.isArray(edits[key])
      ) {
        result[key] = merge(original[key] || {}, edits[key]);
      } else {
        result[key] = edits[key];
      }
    }

    return result;
  }

  const merged = merge(portfolioData, edits);
  return merged;
}

/**
 * Save filtered state to localStorage
 * Params: filters (Object) - Active filters
 */
function saveFilters(filters) {
  localStorage.setItem(FILTER_KEY, JSON.stringify(filters));
  console.log("✓ Filters saved:", filters);
}

/**
 * Get saved filters from localStorage
 * Returns: Object - Saved filter state
 */
function getFilters() {
  const stored = localStorage.getItem(FILTER_KEY);
  return stored ? JSON.parse(stored) : { categories: [], technologies: [] };
}

/**
 * Reset all edits (for debugging or reset button)
 */
function resetAllEdits() {
  localStorage.removeItem(STORAGE_KEY);
  console.log("✓ All edits cleared from localStorage");
}

// Export functions for use in other modules
console.log("✓ Storage module loaded");
