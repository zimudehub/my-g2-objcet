import { Chart } from '@antv/g2'

export function havePie(data, geometry, el) {
    const chart = new Chart({
        container: el,
        autoFit: true,
    });

    chart.coordinate("theta", {
        radius: 0.75,
    });

    chart.data(data);

    chart.scale("percent", {
        formatter: (val) => {
            val = val * 100 + "%";
            return val;
        },
    });

    chart.tooltip({
        showTitle: false,
        showMarkers: false,
    });

    chart
    [geometry]()
        .position("percent")
        .color("item")
        .label("percent", {
            content: (data) => {
                return `${data.item}: ${data.percent * 100}%`;
            },
        })
        .adjust("stack");

    chart.interaction("element-active");

    chart.render();
}

export function outRect(data, geometry, el, showType) {
    const chart = new Chart({
        container: el,
        autoFit: true,
    });

    chart.data(data);
    chart.tooltip({
        showMarkers: false,
        shared: true,
    });
    chart.axis('out', {
        title: {
            ShapeAttrs:{
                fontSize:16
            },

        },
    });
    chart.axis('mouth', {
        title: {
            ShapeAttrs:{
                fontSize:16
            },

        },
    });
    chart.scale('out', {
        alias: '出入库量 (件)'
    });
    chart.scale('mouth', {
        alias: showType
    });
    chart.legend({
        position: 'top-right',
      }); 
    chart
    [geometry]()
        .position('mouth*out')
        .color('name')
        .adjust([
            {
                type: 'dodge',
                marginRatio: 0,
            },
        ]);


    chart.interaction('active-region');

    chart.render();
}