const V1 = () => {
    return (<div>Rendered component - <b>V1</b></div>);
}
const V2 = () => {
    return (<div>Rendered component - <b>V2</b></div>);
}

const components = {
    v1: V1,
    v2: V2
}

export default function ConditionalPropsRender(props) {
    const SpecificComponent = components[props.propsType];
    return (<SpecificComponent />);
}