// COLORS
var COLOR_GOAT_FEMALE = "#cd853f";
var COLOR_GOAT_FEMALE_MATING = "#cd3f40";
var COLOR_GOAT_MALE = "#708090";
var COLOR_WATER = "#4db8ff";
var COLOR_PLAINS_EMPTY = "#f5deb3";
var COLOR_PLAINS_FULL = "#87b727";
var COLOR_MOUNTAIN_EMPTY = "#4d3423";
var COLOR_MOUNTAIN_FULL = "#3c6c3c";

// Board configurations
var SIMULATION_SPEED = 1;
var NUMBER_CELLS_FACTOR = 4;
var GRID_THICKNESS = 0.2;
var PENALTY_PROBABILITY = 0.9;

// Charts
var CHARTS_UPDATE_RATE = 5; // Update every seconds
var CHART_MAXIMUM_POINTS = 100; // Maximum number of points

// Simulator configuration
var MALE = 'M';
var FEMALE = 'F';
var INITIAL_POPULATION_SIZE = 50;
var TICK_TIME = 100; // Milliseconds per tick

// Goats defaults
var DEFAULT_GOAT_AGE = 50;
var DEFAULT_GOAT_FOOD = 250;
var DEFAULT_GOAT_SPEED = 40; // Pixels per second
var DEFAULT_GOAT_EAT_SPEED = 80; // Units of food per second
var CHILD_GOAT_SIZE = 5; // Child goat size
var MAXIMUM_GOAT_SIZE = 12; // Maximum goat size
var MAXIMUM_GOAT_AGE = 600; // Maximum goat age in seconds
var MINIMUM_GOAT_HUNGRY_SPEED = 5; // Units of food that decrease per second
var MAXIMUM_GOAT_HUNGRY_SPEED = 40; // Units of food that decrease per second
var MINIMUM_GOAT_FOOD = 100; // Goat maximum food
var MAXIMUM_GOAT_FOOD = 500; // Goat maximum food
var FERTILE_GOAT_AGE = 100; // Fertile goat age
var FEMALE_FERTILITY_COOLDOWN = 50; // Female cooldown before being fertile
var MALE_FERTILITY_COOLDOWN = 5; // Male cooldown before being fertile

// Cells defaults
var DEFAULT_PLAINS_SPEED_FACTOR = 1; // Goat speed multiplier
var DEFAULT_WATER_SPEED_FACTOR = 2;
var DEFAULT_MOUNTAIN_SPEED_FACTOR = 0.5;
var BASE_GROWTH_FACTOR = 0.5; // Growth factor
var CELL_MAXIMUM_FOOD = 250; // Maximum food units