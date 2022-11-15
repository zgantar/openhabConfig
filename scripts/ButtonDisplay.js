<div ng-style="{ 'background-color': (config.background)}" 
    style="top:0;bottom:0;left:0;right:0;position:absolute" 
    ng-init="model={ action_type: 'navigate', navigate_dashboard: (config.dashboard), name: itemValue(config.value) + (config.unit), foreground: (config.foreground),  font_size: (config.font_size) , backdrop_iconset: (config.backdrop_icon_iconset), backdrop_icon: (config.backdrop_icon), backdrop_center: 'true' }">
    <widget-button ng-model="model"></widget-button>
</div>	
