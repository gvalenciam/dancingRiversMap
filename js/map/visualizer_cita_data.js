//<editor-fold desc="VARIABLES">

/**
 * @param original_data_dancing_rivers: JSON object containing data from the current CITA project divided in menus, submenus and second level submenus
 * @param data_menu_options: JSON object containing only menu options
 * @param data_submenu_options: JSON object containing only submenus (first and second level) options
 * @param rivers_morphometrics_JSON: JSON object containing info about morphometric layers
 * @param rivers_erosion_deposition_JSON: JSON object containing info about erosion - deposition layers
 */
let original_data_dancing_rivers = {

    "data_menu_options": [

        {
            "menu_option_title": "Rivers",
            "menu_option_title_id": "rivers_menu_option_title_id",
            "menu_option_image_ref": "img/side-bar-icon/river_icon.png",
            "menu_option_id": "rivers_menu_option_id",
            "menu_button_option_id": "rivers_menu_button_option_id",
            "menu_bottom_arrow_button_id": "rivers_menu_bottom_arrow_button_id",
            "available": true
        },
        {
            "menu_option_title": "Morphometrics",
            "menu_option_title_id": "morphometrics_menu_option_title_id",
            "menu_option_image_ref": "img/side-bar-icon/metric_icon.png",
            "menu_option_id": "metrics_menu_option_id",
            "menu_button_option_id": "metrics_menu_button_option_id",
            "menu_bottom_arrow_button_id": "morphometrics_menu_bottom_arrow_button_id",
            "available": true
        },
        {
            "menu_option_title": "Field Measurements",
            "menu_option_title_id": "field_measurements_menu_option_title_id",
            "menu_option_image_ref": "img/side-bar-icon/measure_icon.png",
            "menu_option_id": "measurements_menu_option_id",
            "menu_button_option_id": "measurements_menu_button_option_id",
            "menu_bottom_arrow_button_id": "measurements_menu_bottom_arrow_button_id",
            "available": true
        },
        {
            "menu_option_title": "Amazon Forests",
            "menu_option_title_id": "amazon_forests_menu_option_title_id",
            "menu_option_image_ref": "img/side-bar-icon/amazon_forest_blocked_icon.png",
            "menu_option_id": "amazon_forests_menu_option_id",
            "menu_button_option_id": "amazon_forests_menu_button_option_id",
            "menu_bottom_arrow_button_id": "amazon_forests_menu_bottom_arrow_button_id",
            "available": false
        },
        {
            "menu_option_title": "Biodiversity",
            "menu_option_title_id": "biodiversity_menu_option_title_id",
            "menu_option_image_ref": "img/side-bar-icon/biodiversity_blocked_icon.png",
            "menu_option_id": "biodiversity_menu_option_id",
            "menu_button_option_id": "biodiversity_menu_button_option_id",
            "menu_bottom_arrow_button_id": "biodiversity_menu_bottom_arrow_button_id",
            "available": false
        },
        {
            "menu_option_title": "Drone Flights",
            "menu_option_title_id": "drone_menu_option_title_id",
            "menu_option_image_ref": "img/side-bar-icon/drone_icon.png",
            "menu_option_id": "drone_menu_option_id",
            "menu_button_option_id": "drone_menu_button_option_id",
            "menu_bottom_arrow_button_id": "drone_projects_menu_bottom_arrow_button_id",
            "available": true
        },

    ],

    "data_submenu_options": [

        {
            "submenu_name": "rivers_submenu",
            "options": [

                {
                    "submenu_option_title": "Amazonas",
                    "submenu_option_title_id": "amazonas_submenu_option_title_id",
                    "submenu_option_image_ref": "img/side-bar-icon/A_icon.png",
                    "submenu_option_image_enabled_ref": "img/side-bar-icon/A_enabled_icon.png",
                    "submenu_option_image_id": "amazonas_submenu_image_id",
                    "submenu_option_id": "amazonas_submenu_option_id",
                    "submenu_option_button_id": "amazonas_submenu_option_button",
                    "submenu_option_button_check_icon_id": "amazonas_submenu_option_check",
                    "submenu_option_button_click_function": amazonas_submenu_option_clicked,
                    "submenu_option_enabled_state": false,
                    "available": true,
                    "river_availability": [true, true, true, true, true],
                    "data_second_level_submenu_options": []
                },
                {
                    "submenu_option_title": "Huallaga",
                    "submenu_option_title_id": "huallaga_submenu_option_title_id",
                    "submenu_option_image_ref": "img/side-bar-icon/H_icon.png",
                    "submenu_option_image_enabled_ref": "img/side-bar-icon/H_enabled_icon.png",
                    "submenu_option_image_id": "huallaga_submenu_image_id",
                    "submenu_option_id": "huallaga_submenu_option_id",
                    "submenu_option_button_id": "huallaga_submenu_option_button",
                    "submenu_option_button_check_icon_id": "huallaga_submenu_option_check",
                    "submenu_option_button_click_function": huallaga_submenu_option_clicked,
                    "submenu_option_enabled_state": false,
                    "available": true,
                    "river_availability": [true, true, true, true, true],
                    "data_second_level_submenu_options": []
                },
                {
                    "submenu_option_title": "Marañon",
                    "submenu_option_title_id": "marañon_submenu_option_title_id",
                    "submenu_option_image_ref": "img/side-bar-icon/M_icon.png",
                    "submenu_option_image_enabled_ref": "img/side-bar-icon/M_enabled_icon.png",
                    "submenu_option_image_id": "marañon_submenu_image_id",
                    "submenu_option_id": "marañon_submenu_option_id",
                    "submenu_option_button_id": "marañon_submenu_option_button",
                    "submenu_option_button_check_icon_id": "marañon_submenu_option_check",
                    "submenu_option_button_click_function": marañon_submenu_option_clicked,
                    "submenu_option_enabled_state": false,
                    "available": true,
                    "river_availability": [true, true, true, true, true],
                    "data_second_level_submenu_options": []
                },
                {
                    "submenu_option_title": "Ucayali",
                    "submenu_option_title_id": "ucayali_submenu_option_title_id",
                    "submenu_option_image_ref": "img/side-bar-icon/U_icon.png",
                    "submenu_option_image_enabled_ref": "img/side-bar-icon/U_enabled_icon.png",
                    "submenu_option_image_id": "ucayali_submenu_image_id",
                    "submenu_option_id": "ucayali_submenu_option_id",
                    "submenu_option_button_id": "ucayali_submenu_option_button",
                    "submenu_option_button_check_icon_id": "ucayali_submenu_option_check",
                    "submenu_option_button_click_function": ucayali_submenu_option_clicked,
                    "submenu_option_enabled_state": false,
                    "available": true,
                    "river_availability": [true, true, true, true, true],
                    "data_second_level_submenu_options": []
                }

            ]

        },
        {
            "submenu_name": "morphometrics_submenu",
            "options": [

                {
                    "submenu_option_title": "Average Width",
                    "submenu_option_title_id": "width_submenu_option_title_id",
                    "submenu_option_image_ref": "img/side-bar-icon/width_icon.png",
                    "submenu_option_image_enabled_ref": "img/side-bar-icon/width_enabled_icon.png",
                    "submenu_option_image_blocked_ref": "img/side-bar-icon/width_blocked_icon.png",
                    "submenu_option_image_id": "width_submenu_image_id",
                    "submenu_option_id": "width_submenu_option_id",
                    "submenu_option_button_id": "width_submenu_option_button",
                    "submenu_option_button_check_icon_id": "width_submenu_option_check",
                    "submenu_option_button_click_function": width_submenu_option_clicked,
                    "submenu_option_enabled_state": false,
                    "available": false,
                    "river_availability": [true, true, true, true, false],
                    "data_second_level_submenu_options": []

                },
                {
                    "submenu_option_title": "Sinuosity",
                    "submenu_option_title_id": "sinuosity_submenu_option_title_id",
                    "submenu_option_image_ref": "img/side-bar-icon/sinuosity_icon.png",
                    "submenu_option_image_enabled_ref": "img/side-bar-icon/sinuosity_enabled_icon.png",
                    "submenu_option_image_blocked_ref": "img/side-bar-icon/sinuosity_blocked_icon.png",
                    "submenu_option_image_id": "sinuosity_submenu_image_id",
                    "submenu_option_id": "sinuosity_submenu_option_id",
                    "submenu_option_button_id": "sinuosity_submenu_option_button",
                    "submenu_option_button_check_icon_id": "sinuosity_submenu_option_check",
                    "submenu_option_button_click_function": sinuosity_submenu_option_clicked,
                    "submenu_option_enabled_state": false,
                    "available": false,
                    "river_availability": [true, true, true, true, false],
                    "data_second_level_submenu_options": []
                },
                {
                    "submenu_option_title": "Arc Wavelength",
                    "submenu_option_title_id": "arc_wavelength_submenu_option_title_id",
                    "submenu_option_image_ref": "img/side-bar-icon/arc_wavelength_icon.png",
                    "submenu_option_image_enabled_ref": "img/side-bar-icon/arc_wavelength_enabled_icon.png",
                    "submenu_option_image_blocked_ref": "img/side-bar-icon/arc_wavelength_blocked_icon.png",
                    "submenu_option_image_id": "arc_wavelength_submenu_image_id",
                    "submenu_option_id": "arc_wavelength_submenu_option_id",
                    "submenu_option_button_id": "arc_wavelength_submenu_option_button",
                    "submenu_option_button_check_icon_id": "arc_wavelength_submenu_option_check",
                    "submenu_option_button_click_function": arc_wavelength_submenu_option_clicked,
                    "submenu_option_enabled_state": false,
                    "available": false,
                    "river_availability": [false, true, false, true, false],
                    "data_second_level_submenu_options": []
                },
                {
                    "submenu_option_title": "Migration",
                    "submenu_option_title_id": "migration_submenu_option_title_id",
                    "submenu_option_image_ref": "img/side-bar-icon/migration_icon.png",
                    "submenu_option_image_enabled_ref": "img/side-bar-icon/migration_enabled_icon.png",
                    "submenu_option_image_blocked_ref": "img/side-bar-icon/migration_blocked_icon.png",
                    "submenu_option_image_id": "migration_submenu_image_id",
                    "submenu_option_id": "migration_submenu_option_id",
                    "submenu_option_button_id": "migration_submenu_option_button",
                    "submenu_option_button_check_icon_id": "migration_submenu_option_check",
                    "submenu_option_button_click_function": migration_submenu_option_clicked,
                    "submenu_option_enabled_state": false,
                    "available": false,
                    "river_availability": [false, true, false, true, false],
                    "data_second_level_submenu_options": []
                },
                {
                    "submenu_option_title": "Erosion - Deposition",
                    "submenu_option_title_id": "erosion_submenu_option_title_id",
                    "submenu_option_image_ref": "img/side-bar-icon/erosion_icon.png",
                    "submenu_option_image_enabled_ref": "img/side-bar-icon/erosion_enabled_icon.png",
                    "submenu_option_image_blocked_ref": "img/side-bar-icon/erosion_blocked_icon.png",
                    "submenu_option_image_id": "erosion_submenu_image_id",
                    "submenu_option_id": "erosion_submenu_option_id",
                    "submenu_option_button_id": "erosion_submenu_option_button",
                    "submenu_option_button_check_icon_id": "erosion_submenu_option_check",
                    "submenu_option_button_click_function": erosion_submenu_option_clicked,
                    "submenu_option_enabled_state": false,
                    "available": false,
                    "river_availability": [true, false, true, false, false],
                    "data_second_level_submenu_options": []
                }

            ]

        },
        {
            "submenu_name": "measurements_submenu",
            "options": [

                {
                    "submenu_option_title": "Water Levels",
                    "submenu_option_title_id": "water_level_submenu_option_title_id",
                    "submenu_option_image_ref": "img/side-bar-icon/water_level_icon.png",
                    "submenu_option_image_enabled_ref": "img/side-bar-icon/water_level_enabled_icon.png",
                    "submenu_option_image_blocked_ref": "img/side-bar-icon/water_level_blocked_icon.png",
                    "submenu_option_image_id": "water_level_submenu_image_id",
                    "submenu_option_id": "water_level_submenu_option_id",
                    "submenu_option_button_id": "water_level_submenu_option_button",
                    "submenu_option_button_check_icon_id": "water_level_submenu_option_check",
                    "submenu_option_button_click_function": water_level_submenu_option_clicked,
                    "submenu_option_enabled_state": false,
                    "available": false,
                    "river_availability": [false, true, false, false, false],
                    "data_second_level_submenu_options": []
                },
                {
                    "submenu_option_title": "Flow Rates",
                    "submenu_option_title_id": "flow_rate_submenu_option_title_id",
                    "submenu_option_image_ref": "img/side-bar-icon/flow_rates_icon.png",
                    "submenu_option_image_enabled_ref": "img/side-bar-icon/flow_rates_enabled_icon.png",
                    "submenu_option_image_blocked_ref": "img/side-bar-icon/flow_rates_blocked_icon.png",
                    "submenu_option_image_id": "flow_rate_submenu_image_id",
                    "submenu_option_id": "flow_rate_submenu_option_id",
                    "submenu_option_button_id": "flow_rate_submenu_option_button",
                    "submenu_option_button_check_icon_id": "flow_rate_submenu_option_check",
                    "submenu_option_button_click_function": flow_rate_submenu_option_clicked,
                    "submenu_option_enabled_state": false,
                    "available": false,
                    "river_availability": [false, false, false, false, false],
                    "data_second_level_submenu_options": []
                },
                {
                    "submenu_option_title": "Flow Velocity",
                    "submenu_option_title_id": "hydrodynamic_submenu_option_title_id",
                    "submenu_option_image_ref": "img/side-bar-icon/hydrodynamic_icon.png",
                    "submenu_option_image_enabled_ref": "img/side-bar-icon/hydrodynamic_enabled_icon.png",
                    "submenu_option_image_blocked_ref": "img/side-bar-icon/hydrodynamic_blocked_icon.png",
                    "submenu_option_image_id": "hydrodynamic_submenu_image_id",
                    "submenu_option_id": "hydrodynamic_submenu_option_id",
                    "submenu_option_button_id": "hydrodynamic_submenu_option_button",
                    "submenu_option_button_check_icon_id": "hydrodynamic_submenu_option_check",
                    "submenu_option_button_click_function": hydrodynamic_submenu_option_clicked,
                    "submenu_option_enabled_state": false,
                    "available": false,
                    "river_availability": [false, true, false, false, false],
                    "data_second_level_submenu_options": []
                },
                {
                    "submenu_option_title": "Dunes",
                    "submenu_option_title_id": "dunes_submenu_option_title_id",
                    "submenu_option_image_ref": "img/side-bar-icon/dunes_icon.png",
                    "submenu_option_image_enabled_ref": "img/side-bar-icon/dunes_enabled_icon.png",
                    "submenu_option_image_blocked_ref": "img/side-bar-icon/dunes_blocked_icon.png",
                    "submenu_option_image_id": "dunes_submenu_image_id",
                    "submenu_option_id": "dunes_submenu_option_id",
                    "submenu_option_button_id": "dunes_submenu_option_button",
                    "submenu_option_button_check_icon_id": "dunes_submenu_option_check",
                    "submenu_option_button_click_function": dunes_submenu_option_clicked,
                    "submenu_option_enabled_state": false,
                    "available": false,
                    "river_availability": [false, true, false, false, false],
                    "data_second_level_submenu_options": []
                },
                {
                    "submenu_option_title": "Bedload",
                    "submenu_option_title_id": "bedload_submenu_option_title_id",
                    "submenu_option_image_ref": "img/side-bar-icon/bedload_icon.png",
                    "submenu_option_image_enabled_ref": "img/side-bar-icon/bedload_enabled_icon.png",
                    "submenu_option_image_blocked_ref": "img/side-bar-icon/bedload_blocked_icon.png",
                    "submenu_option_image_id": "bedload_submenu_image_id",
                    "submenu_option_id": "bedload_submenu_option_id",
                    "submenu_option_button_id": "bedload_submenu_option_button",
                    "submenu_option_button_check_icon_id": "bedload_submenu_option_check",
                    "submenu_option_button_click_function": bedload_submenu_option_clicked,
                    "submenu_option_enabled_state": false,
                    "available": false,
                    "river_availability": [false, true, false, false, false],
                    "data_second_level_submenu_options": []
                },
                {
                    "submenu_option_title": "Sediments",
                    "submenu_option_title_id": "sediments_submenu_option_title_id",
                    "submenu_option_image_ref": "img/side-bar-icon/sediment_icon.png",
                    "submenu_option_image_enabled_ref": "img/side-bar-icon/sediment_enabled_icon.png",
                    "submenu_option_image_blocked_ref": "img/side-bar-icon/sediment_blocked_icon.png",
                    "submenu_option_image_id": "sediments_submenu_image_id",
                    "submenu_option_id": "sediment_submenu_option_id",
                    "submenu_option_button_id": "sediment_submenu_option_button",
                    "submenu_option_button_check_icon_id": "sediment_submenu_option_check",
                    "submenu_option_button_click_function": sediment_submenu_option_clicked,
                    "submenu_option_enabled_state": false,
                    "available": false,
                    "river_availability": [false, true, false, false, false],
                    "data_second_level_submenu_options": []
                },
                {
                    "submenu_option_title": "LSPIV",
                    "submenu_option_title_id": "lspiv_submenu_option_title_id",
                    "submenu_option_image_ref": "img/side-bar-icon/lspiv_blocked_icon.png",
                    "submenu_option_image_enabled_ref": "img/side-bar-icon/lspiv_enabled_icon.png",
                    "submenu_option_image_blocked_ref": "img/side-bar-icon/lspiv_blocked_icon.png",
                    "submenu_option_image_id": "lspiv_submenu_image_id",
                    "submenu_option_id": "lspiv_submenu_option_id",
                    "submenu_option_button_id": "lspiov_submenu_option_button",
                    "submenu_option_button_check_icon_id": "lspiv_submenu_option_check",
                    "submenu_option_button_click_function": lspiv_submenu_option_clicked,
                    "submenu_option_enabled_state": false,
                    "available": false,
                    "river_availability": [false, false, false, false, false],
                    "data_second_level_submenu_options": []
                },

            ]

        },
        {
            "submenu_name": "amazon_forests_submenu",
            "options": [],
            "available": false

        },
        {
            "submenu_name": "biodiversity_submenu",
            "options": [],
            "available": false

        },
        {
            "submenu_name": "drone_flights_submenu",
            "options": [

                {
                    "submenu_option_title": "On Map",
                    "submenu_option_title_id": "drone_map_submenu_option_title_id",
                    "submenu_option_image_ref": "img/side-bar-icon/marker_icon.png",
                    "submenu_option_image_enabled_ref": "img/side-bar-icon/marker_enabled_icon.png",
                    "submenu_option_image_blocked_ref": "img/side-bar-icon/marker_blocked_icon.png",
                    "submenu_option_image_id": "drone_map_submenu_image_id",
                    "submenu_option_id": "drone_map_submenu_option_id",
                    "submenu_option_button_id": "drone_map_submenu_option_button",
                    "submenu_option_button_check_icon_id": "drone_map_submenu_option_check",
                    "submenu_option_button_click_function": drone_map_submenu_option_clicked,
                    "submenu_option_enabled_state": false,
                    "available": true,
                    "river_availability": [true, true, true, true, true],
                    "data_second_level_submenu_options": []
                },
                {
                    "submenu_option_title": "List",
                    "submenu_option_title_id": "drone_list_submenu_option_title_id",
                    "submenu_option_image_ref": "img/side-bar-icon/grid_icon.png",
                    "submenu_option_image_enabled_ref": "img/side-bar-icon/grid_enabled_icon.png",
                    "submenu_option_image_blocked_ref": "img/side-bar-icon/grid_blocked_icon.png",
                    "submenu_option_image_id": "drone_list_submenu_image_id",
                    "submenu_option_id": "drone_list_submenu_option_id",
                    "submenu_option_button_id": "drone_list_submenu_option_button",
                    "submenu_option_button_check_icon_id": "drone_list_submenu_option_check",
                    "submenu_option_button_click_function": drone_list_submenu_option_clicked,
                    "submenu_option_enabled_state": false,
                    "available": true,
                    "river_availability": [true, true, true, true, true],
                    "data_second_level_submenu_options": []
                }

            ]

        },

    ]

};

let data_menu_options = original_data_dancing_rivers["data_menu_options"];
let data_submenu_options = original_data_dancing_rivers["data_submenu_options"];

var rivers_morphometrics_JSON;
var rivers_erosion_deposition_JSON;
var rivers_migration_JSON;

var UHDHuallagaMarkers = [];
var UHDHuallagaMarkersPositions = [];
var previous_water_level_marker_coordinates = {lat: -180, lng: -180};

//</editor-fold>


//<editor-fold desc="FUNCTIONS">

/**
 * Creates the menu, submenu and second level submenu structure iterating over the original data JSON object. The html structure is based in templates
 * elements defined in the html main file
 * @param menu_options_JSON
 * @param submenu_options_JSON
 */
function set_original_data_menu(menu_options_JSON, submenu_options_JSON){

    var original_data_content_list_template = document.getElementsByTagName("template")[4];
    var original_data_content_menu_option_template = document.getElementsByTagName("template")[5];
    var original_data_content_submenu_template = document.getElementsByTagName("template")[6];
    var original_data_content_second_level_submenu_template = document.getElementsByTagName("template")[16];
    var original_data_content_list_template_content = document.importNode(original_data_content_list_template.content,true);

    for(var i = 0; i < menu_options_JSON.length; i++){

        var original_data_content_menu_option_template_content = document.importNode(original_data_content_menu_option_template.content,true);

        original_data_content_menu_option_template_content.getElementById("data-original-menu-button").style.paddingTop = (i === 0) ? "8%" : "4%";
        original_data_content_menu_option_template_content.getElementById("data-original-menu-button").id = menu_options_JSON[i].menu_button_option_id;
        original_data_content_menu_option_template_content.getElementById("original-data-submenu-container").id = menu_options_JSON[i].menu_option_id;
        original_data_content_menu_option_template_content.getElementById("data-original-menu-title").innerHTML = menu_options_JSON[i].menu_option_title;
        original_data_content_menu_option_template_content.getElementById("data-original-menu-title").style.color = menu_options_JSON[i].available ? "white" : submenu_option_text_color;
        original_data_content_menu_option_template_content.getElementById("data-original-menu-title").style.color = menu_options_JSON[i].submenu_option_enabled_state ? cita_main_color : original_data_content_menu_option_template_content.getElementById("data-original-menu-title").style.color;
        original_data_content_menu_option_template_content.getElementById("data-original-menu-title").setAttribute("data-i18n", menu_options_JSON[i].menu_option_title_id);
        original_data_content_menu_option_template_content.getElementById("data-original-menu-title").id = menu_options_JSON[i].menu_option_title_id;
        original_data_content_menu_option_template_content.getElementById("data-original-menu-icon").src = menu_options_JSON[i].menu_option_image_ref;
        if(submenu_options_JSON[i].options.length <= 0) original_data_content_menu_option_template_content.getElementById("menu-arrow-bottom-image").style.visibility = "hidden";
        original_data_content_menu_option_template_content.getElementById("menu-arrow-bottom-image").id = menu_options_JSON[i].menu_bottom_arrow_button_id;

        (function (i) {

            original_data_content_menu_option_template_content.getElementById(menu_options_JSON[i].menu_bottom_arrow_button_id).addEventListener("click", function () {

                if(document.getElementById(menu_options_JSON[i].menu_option_id).style.maxHeight === "40vh"){
                    document.getElementById(menu_options_JSON[i].menu_option_id).style.maxHeight = "0";
                    document.getElementById(menu_options_JSON[i].menu_bottom_arrow_button_id).src = "img/side-bar-icon/arrow_bottom_icon.png";
                }else{
                    document.getElementById(menu_options_JSON[i].menu_option_id).style.maxHeight = "40vh";
                    document.getElementById(menu_options_JSON[i].menu_bottom_arrow_button_id).src = "img/side-bar-icon/arrow_up_icon.png";
                }

            });

        }(i));

        original_data_content_list_template_content.getElementById("data-original-content-list").appendChild(original_data_content_menu_option_template_content);

        for(var j = 0; j < submenu_options_JSON[i].options.length; j++){

            var original_data_content_submenu_template_content = document.importNode(original_data_content_submenu_template.content,true);
            // original_data_content_submenu_template_content.getElementById("original-data-submenu-option").id = submenu_options_JSON[i].options[j].submenu_option_id;
            original_data_content_submenu_template_content.getElementById("original-data-second-level-submenu-container").id = submenu_options_JSON[i].options[j].submenu_option_id;
            original_data_content_submenu_template_content.getElementById("data-original-submenu-title").innerHTML = submenu_options_JSON[i].options[j].submenu_option_title;
            original_data_content_submenu_template_content.getElementById("data-original-submenu-title").style.color = submenu_options_JSON[i].options[j].available ? "white" : submenu_option_text_color;
            original_data_content_submenu_template_content.getElementById("data-original-submenu-title").setAttribute("data-i18n", submenu_options_JSON[i].options[j].submenu_option_title_id);
            original_data_content_submenu_template_content.getElementById("data-original-submenu-title").id = submenu_options_JSON[i].options[j].submenu_option_title_id;
            // original_data_content_submenu_template_content.getElementById("data-original-submenu-icon").src = submenu_options_JSON[i].options[j].submenu_option_image_ref;
            original_data_content_submenu_template_content.getElementById("data-original-submenu-icon").src = submenu_options_JSON[i].options[j].river_availability[4] ? submenu_options_JSON[i].options[j].submenu_option_image_ref : submenu_options_JSON[i].options[j].submenu_option_image_blocked_ref;
            original_data_content_submenu_template_content.getElementById("data-original-submenu-icon").id = submenu_options_JSON[i].options[j].submenu_option_image_id;
            if(submenu_options_JSON[i].options[j].data_second_level_submenu_options.length <= 0) original_data_content_submenu_template_content.getElementById("submenu-arrow-bottom-image").style.visibility = "hidden";
            original_data_content_submenu_template_content.getElementById("submenu-arrow-bottom-image").id = submenu_options_JSON[i].options[j].submenu_bottom_arrow_button_id;
            original_data_content_submenu_template_content.getElementById("original-data-submenu-option-button").id = submenu_options_JSON[i].options[j].submenu_option_button_id;
            if(submenu_options_JSON[i].options[j].available) original_data_content_submenu_template_content.getElementById(submenu_options_JSON[i].options[j].submenu_option_button_id).addEventListener("click", submenu_options_JSON[i].options[j].submenu_option_button_click_function);

            (function (i, j) {

                original_data_content_submenu_template_content.getElementById(submenu_options_JSON[i].options[j].submenu_bottom_arrow_button_id).addEventListener("click", function () {

                    if(document.getElementById(submenu_options_JSON[i].options[j].submenu_option_id).style.maxHeight === "40vh"){
                        document.getElementById(submenu_options_JSON[i].options[j].submenu_option_id).style.maxHeight = "0";
                        document.getElementById(submenu_options_JSON[i].options[j].submenu_bottom_arrow_button_id).src = "img/side-bar-icon/arrow_bottom_icon.png";
                    }else{
                        document.getElementById(submenu_options_JSON[i].options[j].submenu_option_id).style.maxHeight = "40vh";
                        document.getElementById(submenu_options_JSON[i].options[j].submenu_bottom_arrow_button_id).src = "img/side-bar-icon/arrow_up_icon.png";
                    }

                });

            }(i, j));

            original_data_content_list_template_content.getElementById(menu_options_JSON[i].menu_option_id).appendChild(original_data_content_submenu_template_content);

            for(var k = 0; k < submenu_options_JSON[i].options[j].data_second_level_submenu_options.length; k++){

                var original_data_content_second_level_submenu_template_content = document.importNode(original_data_content_second_level_submenu_template.content,true);
                original_data_content_second_level_submenu_template_content.getElementById("original-data-second-level-submenu-option").id = submenu_options_JSON[i].options[j].data_second_level_submenu_options[k].submenu_option_id;
                original_data_content_second_level_submenu_template_content.getElementById("data-original-second-level-submenu-title").innerHTML = submenu_options_JSON[i].options[j].data_second_level_submenu_options[k].submenu_option_title;
                original_data_content_second_level_submenu_template_content.getElementById("data-original-second-level-submenu-title").style.color = submenu_options_JSON[i].options[j].data_second_level_submenu_options[k].available ? "white" : second_level_submenu_option_text_color;
                original_data_content_second_level_submenu_template_content.getElementById("data-original-second-level-submenu-title").setAttribute("data-i18n", submenu_options_JSON[i].options[j].data_second_level_submenu_options[k].submenu_option_title_id);
                original_data_content_second_level_submenu_template_content.getElementById("data-original-second-level-submenu-title").id = submenu_options_JSON[i].options[j].data_second_level_submenu_options[k].submenu_option_title_id;
                original_data_content_second_level_submenu_template_content.getElementById("data-original-second-level-submenu-icon").src = submenu_options_JSON[i].options[j].data_second_level_submenu_options[k].submenu_option_image_ref;
                original_data_content_second_level_submenu_template_content.getElementById("data-original-second-level-submenu-icon").id = submenu_options_JSON[i].options[j].data_second_level_submenu_options[k].submenu_option_image_id;
                original_data_content_second_level_submenu_template_content.getElementById("original-data-second-level-submenu-option-button").id = submenu_options_JSON[i].options[j].data_second_level_submenu_options[k].submenu_option_button_id;
                if(submenu_options_JSON[i].options[j].data_second_level_submenu_options[k].available) original_data_content_second_level_submenu_template_content.getElementById(submenu_options_JSON[i].options[j].data_second_level_submenu_options[k].submenu_option_button_id).addEventListener("click", submenu_options_JSON[i].options[j].data_second_level_submenu_options[k].submenu_option_button_click_function);

                original_data_content_list_template_content.getElementById(submenu_options_JSON[i].options[j].submenu_option_id).appendChild(original_data_content_second_level_submenu_template_content);

            }


        }

    }

    document.getElementById("data-original-container").appendChild(original_data_content_list_template_content);

}

/**
 * Rivers Submenu Functions
 * Displays the corresponding river data layer centered in the map. Depends on the enabled state of the submenu defined in the JSON object
 */
function amazonas_submenu_option_clicked() {

    if(!data_submenu_options[0].options[0].submenu_option_enabled_state){

        activeRiverIndex = 0;

        clearSubmenuEnabledStatus(1);
        clearSubmenuEnabledStatus(2);
        clearSubmenuEnabledStatus(5);
        toggleIconAndTextEnabled("amazonas_submenu_option_button", 0);

        reloadMenuOptionsAvailabilityForRiver(1, activeRiverIndex);
        reloadMenuOptionsAvailabilityForRiver(2, activeRiverIndex);

        clearMap();

        removeCurrentDisabledRiver();
        addLastRemovedPolygon();

        last_disabled_river_removed = 0;

        addSinglePolygonToMap("data/rivers/Amazon/amazon1987_outline_small.json", amazonas_river_outline_data_layer, "#00BFDF", 1.0, "#00BFDF", 1.0, zoomAndPanToRiverCenter);
        // map.setZoom(rivers_center_zoom_level[activeRiverIndex]);
        // map.panTo(new google.maps.LatLng(rivers_center_coordinates[activeRiverIndex].lat, rivers_center_coordinates[activeRiverIndex].lng));

        // removeCurrentDisabledRiver();
        // addLastRemovedPolygon();
        //
        // last_disabled_river_removed = 0;

    }

}

function huallaga_submenu_option_clicked() {

    if(!data_submenu_options[0].options[1].submenu_option_enabled_state){

        activeRiverIndex = 1;

        clearSubmenuEnabledStatus(1);
        clearSubmenuEnabledStatus(2);
        clearSubmenuEnabledStatus(5);
        toggleIconAndTextEnabled("huallaga_submenu_option_button", 0);

        reloadMenuOptionsAvailabilityForRiver(1, activeRiverIndex);
        reloadMenuOptionsAvailabilityForRiver(2, activeRiverIndex);

        clearMap();

        removeCurrentDisabledRiver();
        addLastRemovedPolygon();

        last_disabled_river_removed = 1;

        addSinglePolygonToMap("data/rivers/Huallaga/huallaga1987_outline_small.json", huallaga_river_outline_data_layer, "#00BFDF", 1.0, "#00BFDF", 1.0, zoomAndPanToRiverCenter);
        // map.setZoom(rivers_center_zoom_level[activeRiverIndex]);
        // map.panTo(new google.maps.LatLng(rivers_center_coordinates[activeRiverIndex].lat, rivers_center_coordinates[activeRiverIndex].lng));

        // removeCurrentDisabledRiver();
        // addLastRemovedPolygon();
        //
        // last_disabled_river_removed = 1;

    }

}

function marañon_submenu_option_clicked() {

    if(!data_submenu_options[0].options[2].submenu_option_enabled_state){

        activeRiverIndex = 2;

        clearSubmenuEnabledStatus(1);
        clearSubmenuEnabledStatus(2);
        clearSubmenuEnabledStatus(5);
        toggleIconAndTextEnabled("marañon_submenu_option_button", 0);

        reloadMenuOptionsAvailabilityForRiver(1, activeRiverIndex);
        reloadMenuOptionsAvailabilityForRiver(2, activeRiverIndex);

        clearMap();

        removeCurrentDisabledRiver();
        addLastRemovedPolygon();

        last_disabled_river_removed = 2;

        addSinglePolygonToMap("data/rivers/Marañon/marañon1987_outline_small.json", marañon_river_outline_data_layer, "#00BFDF", 1.0, "#00BFDF", 1.0, zoomAndPanToRiverCenter);

    }

}

function ucayali_submenu_option_clicked() {

    if(!data_submenu_options[0].options[3].submenu_option_enabled_state){

        activeRiverIndex = 3;

        clearSubmenuEnabledStatus(1);
        clearSubmenuEnabledStatus(2);
        clearSubmenuEnabledStatus(5);
        toggleIconAndTextEnabled("ucayali_submenu_option_button", 0);

        reloadMenuOptionsAvailabilityForRiver(1, activeRiverIndex);
        reloadMenuOptionsAvailabilityForRiver(2, activeRiverIndex);

        clearMap();

        removeCurrentDisabledRiver();
        addLastRemovedPolygon();

        last_disabled_river_removed = 3;

        addSinglePolygonToMap("data/rivers/Ucayali/ucayali1987_outline_small.json", ucayali_river_outline_data_layer, "#00BFDF", 1.0, "#00BFDF", 1.0, zoomAndPanToRiverCenter);
        // map.setZoom(rivers_center_zoom_level[activeRiverIndex]);
        // map.panTo(new google.maps.LatLng(rivers_center_coordinates[activeRiverIndex].lat, rivers_center_coordinates[activeRiverIndex].lng));

        // removeCurrentDisabledRiver();
        // addLastRemovedPolygon();
        //
        // last_disabled_river_removed = 3;

    }

}

function zoomAndPanToRiverCenter() {

    map.setZoom(rivers_center_zoom_level[activeRiverIndex]);
    map.panTo(new google.maps.LatLng(rivers_center_coordinates[activeRiverIndex].lat, rivers_center_coordinates[activeRiverIndex].lng));

}

/**
 * Morphometrics Submenu Functions
 * Displays the corresponding metric data layer along with the legend and year progress bar. Depends on the enabled state of the submenu defined in the JSON object
 * and only works if a river submenu is selected before
 */
function width_submenu_option_clicked() {

    if(!data_submenu_options[1].options[0].submenu_option_enabled_state && activeRiverIndex !== -1){

        clearSubmenuEnabledStatus(2);
        reloadMenuOptionsAvailabilityForRiver(1, activeRiverIndex);
        reloadMenuOptionsAvailabilityForRiver(2, activeRiverIndex);
        toggleIconAndTextEnabled("width_submenu_option_button", 1);

        if(activeRiverIndex === 0 || activeRiverIndex === 2){
            addYearProgressBar6();
        }else if(activeRiverIndex === 1 || activeRiverIndex === 3){
            addYearProgressBar8();
        }

        clearMap();

        fadeInElements(["progress-bar-container"], 350);
        toggleDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_width_layer, 0);
        // removeElementChildNodesWithClass("legendDIVStyle");
        removeElementChildNodesWithClass("extraLegendDIVStyle");
        // addMorphometricsLegend(["#d7191c", "#fe960f", "#ecec0e", "#1e961e"], ["1.2+ km", "0.8 - 1.2", "0.4 - 0.8", "0.0  - 0.4"]);
        addExtraLegend(["#d7191c", "#fe960f", "#ecec0e", "#1e961e"], ["1.2+ km", "0.8 - 1.2", "0.4 - 0.8", "0.0  - 0.4"]);

    }else{}

}
function sinuosity_submenu_option_clicked() {

    if(!data_submenu_options[1].options[1].submenu_option_enabled_state && activeRiverIndex !== -1){

        clearSubmenuEnabledStatus(2);
        reloadMenuOptionsAvailabilityForRiver(1, activeRiverIndex);
        reloadMenuOptionsAvailabilityForRiver(2, activeRiverIndex);
        toggleIconAndTextEnabled("sinuosity_submenu_option_button", 1);

        if(activeRiverIndex === 0 || activeRiverIndex === 2){
            addYearProgressBar6();
        }else if(activeRiverIndex === 1 || activeRiverIndex === 3){
            addYearProgressBar8();
        }

        clearMap();

        fadeInElements(["progress-bar-container"], 350);
        toggleDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_sinuosity_layer, 0);
        // removeElementChildNodesWithClass("legendDIVStyle");
        removeElementChildNodesWithClass("extraLegendDIVStyle");
        // addMorphometricsLegend(["#d7191c", "#fe960f", "#ecec0e", "#1e961e"], ["2.0+", "1.70 - 2.0", "1.35 - 1.70", "1.00  - 1.35"]);
        addExtraLegend(["#d7191c", "#fe960f", "#ecec0e", "#1e961e"], ["2.0+", "1.70 - 2.0", "1.35 - 1.70", "1.00  - 1.35"]);

    }else{}

}
function arc_wavelength_submenu_option_clicked() {

    if(!data_submenu_options[1].options[2].submenu_option_enabled_state && activeRiverIndex !== -1){

        clearSubmenuEnabledStatus(2);
        reloadMenuOptionsAvailabilityForRiver(1, activeRiverIndex);
        reloadMenuOptionsAvailabilityForRiver(2, activeRiverIndex);
        toggleIconAndTextEnabled("arc_wavelength_submenu_option_button", 1);

        if(activeRiverIndex === 0 || activeRiverIndex === 2){
            addYearProgressBar6();
        }else if(activeRiverIndex === 1 || activeRiverIndex === 3){
            addYearProgressBar8();
        }

        clearMap();

        fadeInElements(["progress-bar-container"], 350);
        // addRiverToMap(activeRiverJSON(activeRiverIndex), yearIndex);
        toggleDataLayerVisibility(rivers_morphometrics_JSON[activeRiverIndex].river_wavelength_layer, 0);

        removeElementChildNodesWithClass("legendDIVStyle");
        removeElementChildNodesWithClass("extraLegendDIVStyle");

        // if(activeRiverIndex === 0) addMorphometricsLegend(["#d7191c", "#fe960f", "#ecec0e", "#1e961e"], ["20.0+", "17.0 - 20.0", "13.5 - 17.0", "10.0  - 13.5"]);
        // if(activeRiverIndex === 1) addMorphometricsLegend(["#d7191c", "#fe960f", "#ecec0e", "#1e961e"], ["0.9+", "0.6 - 0.9", "0.3 - 0.6", "0.0  - 0.3"]);
        // if(activeRiverIndex === 2) addMorphometricsLegend(["#d7191c", "#fe960f", "#ecec0e", "#1e961e"], ["20.0+", "17.0 - 20.0", "13.5 - 17.0", "10.0  - 13.5"]);
        // if(activeRiverIndex === 3) addMorphometricsLegend(["#d7191c", "#fe960f", "#ecec0e", "#1e961e"], ["15.0+", "10.0 - 15.0", "0.5 - 10.0", "0.0  - 0.5"]);

        if(activeRiverIndex === 0) addExtraLegend(["#d7191c", "#fe960f", "#ecec0e", "#1e961e"], ["20.0+", "17.0 - 20.0", "13.5 - 17.0", "10.0  - 13.5"]);
        if(activeRiverIndex === 1) addExtraLegend(["#d7191c", "#fe960f", "#ecec0e", "#1e961e"], ["0.9+", "0.6 - 0.9", "0.3 - 0.6", "0.0  - 0.3"]);
        if(activeRiverIndex === 2) addExtraLegend(["#d7191c", "#fe960f", "#ecec0e", "#1e961e"], ["20.0+", "17.0 - 20.0", "13.5 - 17.0", "10.0  - 13.5"]);
        if(activeRiverIndex === 3) addExtraLegend(["#d7191c", "#fe960f", "#ecec0e", "#1e961e"], ["15.0+", "10.0 - 15.0", "0.5 - 10.0", "0.0  - 0.5"]);

    }else{}

}
function migration_submenu_option_clicked() {

    if(!data_submenu_options[1].options[3].submenu_option_enabled_state && activeRiverIndex !== -1){

        clearSubmenuEnabledStatus(2);
        reloadMenuOptionsAvailabilityForRiver(1, activeRiverIndex);
        reloadMenuOptionsAvailabilityForRiver(2, activeRiverIndex);
        toggleIconAndTextEnabled("migration_submenu_option_button", 1);

        if(activeRiverIndex === 1) addMigrationYearProgressBar8();
        if(activeRiverIndex === 3) addMigrationYearProgressBar8();

        clearMap();

        toggleDataLayerVisibility(rivers_migration_JSON[activeRiverIndex].data_layer, 0);

        fadeInElements(["progress-bar-container"], 350);
        hideElements(["play-pause-year-button", "myBar"]);

        removeElementChildNodesWithClass("legendDIVStyle");
        removeElementChildNodesWithClass("extraLegendDIVStyle");
        addMorphometricsLegend([migration_red, migration_orange, migration_yellow, migration_green], ["0.9+ km", "0.6 - 0.9", "0.3 - 0.6", "0.0  - 0.3"]);
        addExtraLegend([migration_older_year, migration_recent_year, migration_channel_change, migration_cut_off], ["Older year", "Recent year", "Channel change", "Cut off"]);

    }else{}

}
function erosion_submenu_option_clicked() {

    if(!data_submenu_options[1].options[4].submenu_option_enabled_state && activeRiverIndex !== -1){

        clearSubmenuEnabledStatus(2);
        reloadMenuOptionsAvailabilityForRiver(1, activeRiverIndex);
        reloadMenuOptionsAvailabilityForRiver(2, activeRiverIndex);
        toggleIconAndTextEnabled("erosion_submenu_option_button", 1);

        if(activeRiverIndex === 0 || activeRiverIndex === 2){
            addYearProgressBar6();
        }else if(activeRiverIndex === 1 || activeRiverIndex === 3){
            addYearProgressBar8();
        }

        clearMap();

        fadeInElements(["progress-bar-container"], 350);
        // removeElementChildNodesWithClass("legendDIVStyle");
        removeElementChildNodesWithClass("extraLegendDIVStyle");
        // addMorphometricsLegend(["#143291", "#B71632", "#64AF62"], ["No change", "Erosion", "Deposition"]);
        addExtraLegend(["#143291", "#B71632", "#64AF62"], ["No change", "Erosion", "Deposition"]);

    }else{}

}

/**
 * Display morphometric information about the feature where the mouse is over
 * @param event
 * @param river_data_layer
 */
function morphometricsMouseoverCallback(event, river_data_layer) {

    river_data_layer.overrideStyle(event.feature, {fillColor: "#000000", fillOpacity: 0.6});
    document.getElementById("metricsTextWidth").innerHTML = $.i18n('metrics-average-width') + ": " + (event.feature.getProperty("av_width")/1000).toFixed(3) + " km";
    document.getElementById("metricsTextWidth").style.display = data_submenu_options[1].options[0].submenu_option_enabled_state ? "block" : "none";
    document.getElementById("metricsTextSin").innerHTML = $.i18n('metrics-sinuosity') + ": " + event.feature.getProperty("sinuosity").toFixed(3);
    document.getElementById("metricsTextSin").style.display = data_submenu_options[1].options[1].submenu_option_enabled_state ? "block" : "none";
    document.getElementById("metricsTextWave").innerHTML = $.i18n('metrics-arc-wavelength') + ": " + (event.feature.getProperty("arcwavelen")/1000).toFixed(3) + " km";
    document.getElementById("metricsTextWave").style.display = data_submenu_options[1].options[2].submenu_option_enabled_state ? "block" : "none";
    fadeInElements(["metricsContainer"], 350);

}

/**
 * Removes morphometric information about the feature when the mouse is out
 * @param event
 * @param river_data_layer
 */
function morphometricsMouseoutCallback(event, river_data_layer) {
    river_data_layer.revertStyle();
    fadeOutElements(["metricsContainer"], 350);
}

/**
 * Field Measurements Submenu Functions
 * Displays the location of the field measurements as interactive markers or polygons. Information is displayed when the marker or polygon is clicked
 * showing cards with graphs and images
 */
function water_level_submenu_option_clicked() {

    if(!data_submenu_options[2].options[0].submenu_option_enabled_state && activeRiverIndex !== -1){

        clearSubmenuEnabledStatus(1);
        reloadMenuOptionsAvailabilityForRiver(1, activeRiverIndex);
        reloadMenuOptionsAvailabilityForRiver(2, activeRiverIndex);
        toggleIconAndTextEnabled("water_level_submenu_option_button", 2);

        clearMap();

        if(water_level_markers.length <= 0){

            if(activeRiverIndex === 0) addWaterLevelMarkersGeoJSON("data/Water-levels/Amazonas/Estaciones_UTEC.geojson", water_level_data_layer, "img/marker-icons/azul.png", waterLevelsMarkerClickCallback, null, null, water_level_markers);
            if(activeRiverIndex === 1) addWaterLevelMarkersGeoJSON("data/Water-levels/Huallaga/Estaciones_UTEC.geojson", water_level_data_layer, "img/marker-icons/azul.png", waterLevelsMarkerClickCallback, null, null, water_level_markers);
            // if(activeRiverIndex === 1) addWaterLevelMarkersGeoJSON("data/Water-levels/Huallaga/Estaciones_UTEC.geojson", water_level_data_layer, "img/side-bar-icon/water_level_marker_blocked_icon.png", waterLevelsMarkerClickCallback, markerMouseoverCallback, markerMouseoutCallback, water_level_markers);
            if(activeRiverIndex === 2) addWaterLevelMarkersGeoJSON("data/Water-levels/Marañon/Estaciones_UTEC.geojson", water_level_data_layer, "img/marker-icons/azul.png", waterLevelsMarkerClickCallback, null, null, water_level_markers);
            if(activeRiverIndex === 3) addWaterLevelMarkersGeoJSON("data/Water-levels/Ucayali/Estaciones_UTEC.geojson", water_level_data_layer, "img/marker-icons/azul.png", waterLevelsMarkerClickCallback, null, null, water_level_markers);

        }else{
            water_level_data_layer.setMap(map);
        }

        // map.setZoom(rivers_center_zoom_level[activeRiverIndex]);
        map.setZoom(10);
        map.panTo(new google.maps.LatLng(rivers_center_coordinates[activeRiverIndex].lat, rivers_center_coordinates[activeRiverIndex].lng));

    }else{}

}
function hydrodynamic_submenu_option_clicked() {

    if(!data_submenu_options[2].options[2].submenu_option_enabled_state && activeRiverIndex !== -1){

        clearSubmenuEnabledStatus(1);
        reloadMenuOptionsAvailabilityForRiver(1, activeRiverIndex);
        reloadMenuOptionsAvailabilityForRiver(2, activeRiverIndex);
        toggleIconAndTextEnabled("hydrodynamic_submenu_option_button", 2);

        UHDHuallagaMarkers = [];
        UHDHuallagaMarkersPositions = [];
        clearMap();

        addButtonOptionsUHDDropdown(38, "dropdown-uhd-top-buttons-container");
        addButtonOptionsUHDDropdown(38, "dropdown-uhd-bottom-buttons-container");
        addUHDMarkers("data/cross_sections/huallaga-cross-section-location.geojson", "img/marker-icons/blanco.png", UHDHuallagaMarkers, UHDHuallagaMarkersPositions, hydrodynamic_marker_click_function);

    }else{}

}
function flow_rate_submenu_option_clicked() {

}
function dunes_submenu_option_clicked() {

    if(!data_submenu_options[2].options[3].submenu_option_enabled_state && activeRiverIndex !== -1){

        clearSubmenuEnabledStatus(1);
        reloadMenuOptionsAvailabilityForRiver(1, activeRiverIndex);
        reloadMenuOptionsAvailabilityForRiver(2, activeRiverIndex);
        toggleIconAndTextEnabled("dunes_submenu_option_button", 2);

        clearMap();

        dunes_sections_huallaga_campaign_1_data_layer.setMap(map);
        // map.setZoom(rivers_center_zoom_level[activeRiverIndex]);
        map.setZoom(10);
        map.panTo(new google.maps.LatLng(rivers_center_coordinates[activeRiverIndex].lat, rivers_center_coordinates[activeRiverIndex].lng));

    }else{}

}
function bedload_submenu_option_clicked() {

    if(!data_submenu_options[2].options[4].submenu_option_enabled_state && activeRiverIndex !== -1){

        clearSubmenuEnabledStatus(1);
        reloadMenuOptionsAvailabilityForRiver(1, activeRiverIndex);
        reloadMenuOptionsAvailabilityForRiver(2, activeRiverIndex);
        toggleIconAndTextEnabled("bedload_submenu_option_button", 2);

        clearMap();

        bedload_sections_huallaga_campaign_1_data_layer.setMap(map);
        // map.setZoom(rivers_center_zoom_level[activeRiverIndex]);
        map.setZoom(10);
        map.panTo(new google.maps.LatLng(rivers_center_coordinates[activeRiverIndex].lat, rivers_center_coordinates[activeRiverIndex].lng));

    }else{}

}
function sediment_submenu_option_clicked() {

    if(!data_submenu_options[2].options[5].submenu_option_enabled_state && activeRiverIndex !== -1){

        document.getElementById("sediments-card-size-button").addEventListener("click", function () {
            document.getElementById("sediments-card-size-button").src = "img/side-bar-icon/sediment_size_button_enabled_icon.png";
            document.getElementById("sediments-card-concentration-button").src = "img/side-bar-icon/sediment_concentration_button_icon.png";
            sediment_button_type_selected = "size";
            document.getElementById("sediments-card-image").src = "img/Sediments/Huallaga/" + sediment_feature_UHS_property_selected + "_" + sediment_button_type_selected + ".png";
        });
        document.getElementById("sediments-card-concentration-button").addEventListener("click", function () {
            document.getElementById("sediments-card-size-button").src = "img/side-bar-icon/sediment_size_button_icon.png";
            document.getElementById("sediments-card-concentration-button").src = "img/side-bar-icon/sediment_concentration_button_enabled_icon.png";
            sediment_button_type_selected = "concentration";
            document.getElementById("sediments-card-image").src = "img/Sediments/Huallaga/" + sediment_feature_UHS_property_selected + "_" + sediment_button_type_selected + ".png";
        });

        clearSubmenuEnabledStatus(1);
        reloadMenuOptionsAvailabilityForRiver(1, activeRiverIndex);
        reloadMenuOptionsAvailabilityForRiver(2, activeRiverIndex);
        toggleIconAndTextEnabled("sediment_submenu_option_button", 2);

        clearMap();

        addMarkersGeoJSON("data/Sediments/Huallaga/UHS_Huallaga.geojson", sediments_stations_huallaga_campaign_1_data_layer, "img/marker-icons/azul.png", sedimentsMarkerClickCallback, null, null, sediments_markers);
        // map.setZoom(rivers_center_zoom_level[activeRiverIndex]);
        map.setZoom(10);
        map.panTo(new google.maps.LatLng(rivers_center_coordinates[activeRiverIndex].lat, rivers_center_coordinates[activeRiverIndex].lng));

    }else{}

}
function lspiv_submenu_option_clicked() {
    addMarkersGeoJSON("data/LSPIV/Estaciones_LSPIV.geojson", lspiv_data_layer, "img/side-bar-icon/lspiv_marker_icon.png", LSPIVMarkerClickCallback, null, null, lspiv_markers);
}

/**
 * Callback function executed when a uhd marker is clicked
 * @param event
 */
function hydrodynamic_marker_click_function(features){

    fadeInElements(["UHD-top-card-container", "UHD-bottom-card-container"], 350);
    document.getElementById("UHD-top-card-image").addEventListener("click", function () {
        showZoomImage(document.getElementById("UHD-top-card-image").src);
    });
    document.getElementById("UHD-bottom-card-image").addEventListener("click", function () {
        showZoomImage(document.getElementById("UHD-bottom-card-image").src);
    });
    setUHDDropdownsListeners(features);

    UHDHuallagaMarkers.forEach(function (marker) {

        if(UHDHuallagaMarkers.indexOf(marker) + 1 === UHDMarkerIndexBottom)  marker.setIcon("img/marker-icons/azul.png");
        if(UHDHuallagaMarkers.indexOf(marker) + 1 !== UHDMarkerIndexBottom) marker.setIcon("img/marker-icons/blanco.png");

    });

}

/**
 * Callback function executed when a dune feature is clicked
 * @param event
 */
function dunesSectionsClickCallback(event) {

    //TODO: Should be with the points center
    offsetCenter(new google.maps.LatLng(event.latLng.lat(), event.latLng.lng()), 14);
    fadeInElements(["dunes-card-container"], 350);

    dunes_lines_huallaga_campaign_1_data_layer.forEach(function (feature) {

        if(feature.getProperty("layer").localeCompare("UHG" + event.feature.getProperty("id")) === 0 && feature.getProperty("Name").localeCompare("1") === 0){
            document.getElementById("dunes-top-card-title").innerHTML = "Day 1: " + feature.getProperty("dayOne");
            document.getElementById("dunes-bottom-card-title").innerHTML = "Day 2: " + feature.getProperty("dayTwo");
            dunes_lines_huallaga_campaign_1_data_layer.overrideStyle(feature, {strokeColor: dunes_lines_color, strokeOpacity: 1.0, strokeWeight: 3.0});
        }else{
            dunes_lines_huallaga_campaign_1_data_layer.overrideStyle(feature, {strokeColor: "#000000", strokeOpacity: 1.0, strokeWeight: 1.0});
        }

    });

    document.getElementById("dropdownMenuDunesLines").innerHTML = "Profile 1";
    dunes_section_selected_index = event.feature.getProperty("id");

    document.getElementById("dunes-top-card-image").src = "img/Dunes/Huallaga/UHG" + dunes_section_selected_index +"-1.png";
    document.getElementById("dunes-top-card-image").addEventListener("click", function () {
        showZoomImage(document.getElementById("dunes-top-card-image").src);
    });
    // document.getElementById("dunes-bottom-card-image").src = "img/Dunes/Huallaga/UHG" + dunes_section_selected_index +"-1.png";
    // document.getElementById("dunes-bottom-card-image").addEventListener("click", function () {
    //     showZoomImage(document.getElementById("dunes-bottom-card-image").src);
    // });

    setDunesDropdownListener();

    dunes_lines_huallaga_campaign_1_data_layer.setMap(map);

}

/**
 * Callback function executed when a bedload feature is clicked
 * @param event
 */
function bedloadSectionsClickCallback(event) {

    //TODO: Should be with the points center
    offsetCenter(new google.maps.LatLng(event.latLng.lat(), event.latLng.lng()), 14);
    fadeInElements(["bedload-card-container"], 350);

    // dunes_lines_huallaga_campaign_1_data_layer.forEach(function (feature) {
    //
    //     if(feature.getProperty("layer").localeCompare("UHG" + event.feature.getProperty("id")) === 0 && feature.getProperty("Name").localeCompare("1") === 0){
    //         document.getElementById("dunes-top-card-title").innerHTML = "Day 1: " + feature.getProperty("dayOne");
    //         document.getElementById("dunes-bottom-card-title").innerHTML = "Day 2: " + feature.getProperty("dayTwo");
    //         dunes_lines_huallaga_campaign_1_data_layer.overrideStyle(feature, {strokeColor: dunes_lines_color, strokeOpacity: 1.0, strokeWeight: 2.0});
    //     }else{
    //         dunes_lines_huallaga_campaign_1_data_layer.overrideStyle(feature, {strokeColor: "#000000", strokeOpacity: 0.0, strokeWeight: 0.0});
    //     }
    //
    // });

    // document.getElementById("dropdownMenuDunesLines").innerHTML = "Line 1";
    // dunes_section_selected_index = event.feature.getProperty("id");

    document.getElementById("bedload-card-image").src = "img/Bedload/Huallaga/UHG" + event.feature.getProperty("id") +"-bedload.png";
    document.getElementById("bedload-card-image").addEventListener("click", function () {
        showZoomImage(document.getElementById("bedload-card-image").src);
    });

    //setDunesDropdownListener();

}

/**
 * Callback function executed when a water level marker feature is clicked
 * @param event
 */
function waterLevelsMarkerClickCallback(event) {

    offsetCenter(new google.maps.LatLng(event.feature.getProperty("Latitud"), event.feature.getProperty("Longitud")), 12);
    fadeInElements(["water-level-card-container"], 350);
    document.getElementById("water-level-card-location").innerHTML = event.feature.getProperty("Lugar");
    document.getElementById("dropdownMenuButtonWaterlevel").innerHTML = event.feature.getProperty("Lugar");
    if(activeRiverIndex === 0) document.getElementById("water-level-card-image").src = "img/Water-levels/Amazonas/" + event.feature.getProperty("Lugar") + ".png";
    if(activeRiverIndex === 1) document.getElementById("water-level-card-image").src = "img/Water-levels/Huallaga/" + event.feature.getProperty("Lugar") + ".png";
    if(activeRiverIndex === 2) document.getElementById("water-level-card-image").src = "img/Water-levels/Marañon/" + event.feature.getProperty("Lugar") + ".png";
    if(activeRiverIndex === 3) document.getElementById("water-level-card-image").src = "img/Water-levels/Ucayali/" + event.feature.getProperty("Lugar") + ".png";

    previous_water_level_marker_coordinates.lat = event.feature.getProperty("Latitud");
    previous_water_level_marker_coordinates.lng = event.feature.getProperty("Longitud");

    document.getElementById("water-level-card-image").addEventListener("click", function () {
        showZoomImage(document.getElementById("water-level-card-image").src);
    });

}

/**
 * Callback function executed when a sediment marker feature is clicked
 * @param event
 */
function sedimentsMarkerClickCallback(event) {

    sediment_feature_UHS_property_selected = event.feature.getProperty("UHS");
    document.getElementById("sediments-card-size-button").src = "img/side-bar-icon/sediment_size_button_enabled_icon.png";
    document.getElementById("sediments-card-concentration-button").src = "img/side-bar-icon/sediment_concentration_button_icon.png";
    sediment_button_type_selected = "size";

    offsetCenter(new google.maps.LatLng(event.feature.getProperty("X"), event.feature.getProperty("Y")), 12);
    fadeInElements(["sediments-card-container"], 350);
    // document.getElementById("dropdownMenuButtonWaterlevel").innerHTML = event.feature.getProperty("Estaciones");
    // document.getElementById("sediments-card-image").src = "img/Sediments/Huallaga" + event.feature.getProperty("Name") + ".png";
    document.getElementById("sediments-card-image").src = "img/Sediments/Huallaga/" + event.feature.getProperty("UHS")+ "_" + sediment_button_type_selected + ".png";
    document.getElementById("sediments-card-image").addEventListener("click", function () {
        showZoomImage(document.getElementById("sediments-card-image").src);
    });

}

/**
 * Callback function executed when a LSPIV marker feature is clicked
 * @param event
 */
function LSPIVMarkerClickCallback(event) {

    document.getElementById("lspiv-marker-card-title").innerHTML = event.feature.getProperty("Name");
    document.getElementById("lspiv-marker-card-image").style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0.0)), url('Gif/lspiv_gifs/" + event.feature.getProperty("Id") + ".gif')";
    fadeInElements(["lspiv-marker-click-container"], 350);
    offsetCenter(new google.maps.LatLng(event.feature.getProperty("Latitud"), event.feature.getProperty("Longitud")), 12);

}

/**
 * Drone flights Submenu Functions
 * Displays drone flights locations as markers on the map or as a card list on top of the map. The video is show when a card is clicked.
 */
function drone_map_submenu_option_clicked() {

    if(!data_submenu_options[5].options[0].submenu_option_enabled_state){
        clearMap();
        activeRiverIndex = 1;
        toggleIconAndTextEnabled("drone_map_submenu_option_button", 5);
        activeRiverIndex = -1;
        addDroneMarker();
    }

}
function drone_list_submenu_option_clicked() {

    if(!data_submenu_options[5].options[1].submenu_option_enabled_state){
        clearMap();
        var temp = activeRiverIndex;
        activeRiverIndex = 1;
        toggleIconAndTextEnabled("drone_list_submenu_option_button", 5);
        activeRiverIndex = temp;
        document.getElementById("drone-flights-card-container").style.visibility = "visible";
        $("#drone-flights-card-container").fadeIn(200, function () {
            fadeInElements(["card-1-row-1", "card-2-row-1", "card-3-row-1", "card-1-row-2", "card-2-row-2", "card-3-row-2", "card-1-row-3", "card-2-row-3", "card-3-row-3", "card-1-row-4", "card-2-row-4", "card-3-row-4", "card-1-row-5", "card-2-row-5", "card-3-row-5"], 400);
        });
    }

}

//</editor-fold>