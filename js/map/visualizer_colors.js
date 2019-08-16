//<editor-fold desc="VARIABLES">

/**
 * List of colors used in the visualizer map
 * @type String (hex color format)
 */

let cita_main_color = "#00BFDF";
let islands_fill_color = "#69BC89";
let noChangeColor_erosionDeposition = "#143291";
let erosionColor_erosionDeposition = "#B71632";
let depositionColor_erosionDeposition = "#64AF62";
let dunes_section_border_color = "#252323";
let dunes_sections_color = "#7F95D1";
let dunes_lines_color = "#252323";
let bedload_sections_color = "#99FFFF";
let migration_green = "#1E961E";
let migration_yellow = "#ECEC0E";
let migration_orange = "#FE960F";
let migration_red = "#D7191C";
let migration_older_year = "#DA3659";
let migration_recent_year = "#000000";
let migration_channel_change = "#7849F1";
let migration_cut_off = "#3D86E4";
let drone_animation_color = "#FF0000";
let panel_header_title_color = "#212529";
let menu_option_text_color = "#323232";
let submenu_option_text_color = "#6A687A";
let second_level_submenu_option_text_color = "#4B5358";
let metrics_width_colors = [

    "#d7191c",
    "#fe960f",
    "#ecec0e",
    "#1e961e"

];
let metrics_sinuosity_colors = [

    "#d7191c",
    "#fe960f",
    "#ecec0e",
    "#1e961e"

];
let metrics_wavelength_colors = [

    "#d7191c",
    "#fe960f",
    "#ecec0e",
    "#1e961e"

];

//</editor-fold>


//<editor-fold desc="FUNCTIONS">

/**
 * Evaluates the metric value and returns the correspondent color according to the scale (km)
 * @param metricValue in km
 * @returns color hex value
 */
function colorMapWidth(metricValue) {
    return  metricValue >= 1.2 ? metrics_width_colors[0]:
            metricValue >= 0.8 ? metrics_width_colors[1]:
            metricValue >= 0.4 ? metrics_width_colors[2]:
                                 metrics_width_colors[3];
}

/**
 * Evaluates the metric value and returns the correspondent color according to the scale
 * @param metricValue
 * @returns color hex value
 */
function colorMapSinuosity(metricValue) {
    return  metricValue >= 2.00 ? metrics_sinuosity_colors[0]:
            metricValue >= 1.70 ? metrics_sinuosity_colors[1]:
            metricValue >= 1.35 ? metrics_sinuosity_colors[2]:
                                  metrics_sinuosity_colors[3];
}

/**
 * Evaluates the metric value and returns the correspondent color according to the scale (km)
 * @param metricValue in km
 * @returns color hex value
 */
function colorMapWavelength(metricValue) {

    if(activeRiverIndex === 0){

    } else if(activeRiverIndex === 1){

        return  metricValue >= 0.90 ? metrics_wavelength_colors[0]:
                metricValue >= 0.60 ? metrics_wavelength_colors[1]:
                metricValue >= 0.30 ? metrics_wavelength_colors[2]:
                                      metrics_wavelength_colors[3];

    }else if(activeRiverIndex === 2){

    }else if(activeRiverIndex === 3){

        return  metricValue >= 15.0 ? metrics_wavelength_colors[0]:
                metricValue >= 10.0 ? metrics_wavelength_colors[1]:
                metricValue >= 0.50 ? metrics_wavelength_colors[2]:
                                      metrics_wavelength_colors[3];

    }

}

/**
 * Evaluates the metric value and returns the correspondent color according to the scale (km)
 * @param metricValue in km
 * @returns color hex value
 */
function colorMapMigration(metricValue) {

    return  metricValue > 0.9 ? migration_red:
            metricValue > 0.6 ? migration_orange:
            metricValue > 0.3 ? migration_yellow:
                                migration_green;

}

/**
 * Returns the fill color for the current polygon correspondent with the selected morphometric option (width, sinuosity, wavelength)
 * @param properties object with metrics values
 * @returns color hex value
 */
function polygonFillColor(properties) {

    if(data_submenu_options[1].options[0].submenu_option_enabled_state){

        return colorMapWidth(properties.av_width/1000);

    }else if(data_submenu_options[1].options[1].submenu_option_enabled_state){

        return colorMapSinuosity(properties.sinuosity);

    }else if(data_submenu_options[1].options[2].submenu_option_enabled_state){

        return colorMapWavelength(properties.arcwavelen/1000);

    }

}

//</editor-fold>