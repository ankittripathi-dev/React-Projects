// Mock data for AI safety incidents
let incidents = [
    {
        id: 1,
        title: "Biased Recommendation Algorithm",
        description: "Algorithm consistently favored certain demographics...",
        severity: "Medium",
        reported_at: "2025-03-15T10:00:00Z"
    },
    {
        id: 2,
        title: "LLM Hallucination in Critical Info",
        description: "LLM provided incorrect safety procedure information...",
        severity: "High",
        reported_at: "2025-04-01T14:30:00Z"
    },
    {
        id: 3,
        title: "Minor Data Leak via Chatbot",
        description: "Chatbot inadvertently exposed non-sensitive user metadata...",
        severity: "Low",
        reported_at: "2025-03-20T09:15:00Z"
    }
];

// DOM elements
const incidentsList = document.getElementById('incidents-list');
const filterButtons = document.querySelectorAll('.filter-btn');
const sortSelect = document.getElementById('sort-select');
const incidentForm = document.getElementById('incident-form');
const incidentCountElement = document.getElementById('incident-count-number');

// Current filter and sort state
let currentFilter = 'all';
let currentSort = 'newest';

// Initialize the dashboard
document.addEventListener('DOMContentLoaded', () => {
    // Add sort indicator to the sort controls
    addSortIndicator();

    // Render incidents
    renderIncidents();

    // Setup event listeners
    setupEventListeners();

    // Setup report CTA button
    setupReportCTA();
});

// Add sort indicator to the sort controls
function addSortIndicator() {
    const sortHeading = document.getElementById('sort-heading');
    const sortIndicator = document.createElement('span');
    sortIndicator.id = 'sort-indicator';
    sortIndicator.className = 'sort-indicator';
    sortIndicator.setAttribute('aria-hidden', 'true');
    sortHeading.appendChild(sortIndicator);

    // Update sort indicator based on current sort
    updateSortIndicator();
}

// Set up event listeners
function setupEventListeners() {
    // Filter buttons
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Update active button
            filterButtons.forEach(btn => {
                btn.classList.remove('active');
                btn.setAttribute('aria-pressed', 'false');
            });
            button.classList.add('active');
            button.setAttribute('aria-pressed', 'true');

            // Update filter and re-render
            currentFilter = button.getAttribute('data-severity');
            renderIncidents();
        });

        // Add keyboard accessibility
        button.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                button.click();
            }
        });
    });

    // Sort dropdown
    sortSelect.addEventListener('change', () => {
        currentSort = sortSelect.value;
        updateSortIndicator();
        renderIncidents();
    });

    // Form submission
    incidentForm.addEventListener('submit', (e) => {
        e.preventDefault();
        addNewIncident();
    });
}

// Render incidents based on current filter and sort
function renderIncidents() {
    // Clear current list
    incidentsList.innerHTML = '';

    // Filter incidents
    let filteredIncidents = incidents;
    if (currentFilter !== 'all') {
        filteredIncidents = incidents.filter(incident => incident.severity === currentFilter);
    }

    // Sort incidents
    filteredIncidents.sort((a, b) => {
        const dateA = new Date(a.reported_at);
        const dateB = new Date(b.reported_at);

        if (currentSort === 'newest') {
            return dateB - dateA;
        } else {
            return dateA - dateB;
        }
    });

    // Update incident count
    incidentCountElement.textContent = filteredIncidents.length;

    // Show message if no incidents
    if (filteredIncidents.length === 0) {
        incidentsList.innerHTML = '<div class="no-incidents-message">No incidents found matching your criteria</div>';
        return;
    }

    // Render each incident
    filteredIncidents.forEach(incident => {
        const incidentCard = createIncidentCard(incident);
        incidentsList.appendChild(incidentCard);
    });
}

// Create an incident card element
function createIncidentCard(incident) {
    const card = document.createElement('div');
    card.className = 'incident-card';

    // Format date
    const reportedDate = new Date(incident.reported_at);
    const formattedDate = reportedDate.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    // Determine severity class
    const severityClass = incident.severity.toLowerCase();

    // Create card content
    card.innerHTML = `
        <div class="incident-header">
            <span class="incident-title">${incident.title}</span>
            <span class="severity ${severityClass}">${incident.severity}</span>
        </div>
        <div class="incident-date">Reported on ${formattedDate}</div>
        <button class="view-details-btn" aria-expanded="false" aria-controls="description-${incident.id}">View Details</button>
        <div id="description-${incident.id}" class="incident-description" aria-hidden="true">${incident.description}</div>
    `;

    // Add event listener for toggling description
    const viewDetailsBtn = card.querySelector('.view-details-btn');
    const description = card.querySelector('.incident-description');

    // Function to toggle description visibility
    const toggleDescription = () => {
        // Check if already visible
        const isCurrentlyVisible = description.classList.contains('visible');

        // If we're hiding, start transition
        if (isCurrentlyVisible) {
            description.classList.remove('visible');
            viewDetailsBtn.textContent = 'View Details';
            viewDetailsBtn.setAttribute('aria-expanded', 'false');
            description.setAttribute('aria-hidden', 'true');
        } else {
            // If we're showing, ensure all other descriptions are hidden first
            document.querySelectorAll('.incident-description.visible').forEach(el => {
                el.classList.remove('visible');

                // Also update the corresponding button
                const parentCard = el.closest('.incident-card');
                if (parentCard) {
                    const btn = parentCard.querySelector('.view-details-btn');
                    if (btn) {
                        btn.textContent = 'View Details';
                        btn.setAttribute('aria-expanded', 'false');
                    }
                }
            });

            // Then show this description
            description.classList.add('visible');
            viewDetailsBtn.textContent = 'Hide Details';
            viewDetailsBtn.setAttribute('aria-expanded', 'true');
            description.setAttribute('aria-hidden', 'false');
        }
    };

    // Add click event listener
    viewDetailsBtn.addEventListener('click', toggleDescription);

    // Add keyboard accessibility
    viewDetailsBtn.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            toggleDescription();
        }
    });

    return card;
}

// Add a new incident from the form
function addNewIncident() {
    const titleInput = document.getElementById('incident-title');
    const descriptionInput = document.getElementById('incident-description');
    const severityInput = document.getElementById('incident-severity');

    // Validate inputs (form has required attributes, but double-check)
    if (!titleInput.value || !descriptionInput.value || !severityInput.value) {
        showNotification('Please fill in all fields', 'error');
        return;
    }

    // Create new incident object
    const newIncident = {
        id: incidents.length + 1,
        title: titleInput.value,
        description: descriptionInput.value,
        severity: severityInput.value,
        reported_at: new Date().toISOString()
    };

    // Add to incidents array
    incidents.push(newIncident);

    // Reset form
    incidentForm.reset();

    // Re-render incidents
    renderIncidents();

    // Show confirmation
    showNotification('Incident reported successfully!', 'success');

    // Scroll to the new incident
    setTimeout(() => {
        document.getElementById('incidents-heading').scrollIntoView({ behavior: 'smooth' });
    }, 300);
}

// Show notification message
function showNotification(message, type = 'info') {
    // Create notification element if it doesn't exist
    let notification = document.getElementById('notification');
    if (!notification) {
        notification = document.createElement('div');
        notification.id = 'notification';
        document.body.appendChild(notification);
    }

    // Set message and type
    notification.textContent = message;
    notification.className = `notification ${type}`;

    // Show notification
    notification.classList.add('show');

    // Hide after 3 seconds
    setTimeout(() => {
        notification.classList.remove('show');
    }, 3000);
}

// Update sort indicator based on current sort
function updateSortIndicator() {
    const sortIndicator = document.getElementById('sort-indicator');
    if (!sortIndicator) return;

    // Update text based on current sort
    if (currentSort === 'newest') {
        sortIndicator.textContent = '↓ Newest';
        sortIndicator.title = 'Sorted by newest first';
    } else {
        sortIndicator.textContent = '↑ Oldest';
        sortIndicator.title = 'Sorted by oldest first';
    }
}

// Save to localStorage (optional enhancement)
function saveToLocalStorage() {
    localStorage.setItem('aiSafetyIncidents', JSON.stringify(incidents));
}

// Load from localStorage (optional enhancement)
function loadFromLocalStorage() {
    const savedIncidents = localStorage.getItem('aiSafetyIncidents');
    if (savedIncidents) {
        incidents = JSON.parse(savedIncidents);
    }
}

// Setup report CTA button
function setupReportCTA() {
    const reportCTABtn = document.getElementById('report-cta');
    const reportSection = document.getElementById('report-section');

    if (reportCTABtn && reportSection) {
        reportCTABtn.addEventListener('click', () => {
            // Scroll to the report section
            reportSection.scrollIntoView({ behavior: 'smooth' });

            // Add a highlight effect
            reportSection.classList.add('highlight');

            // Focus on the first input field
            setTimeout(() => {
                document.getElementById('incident-title').focus();
                reportSection.classList.remove('highlight');
            }, 800);
        });
    }
}
