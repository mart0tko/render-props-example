const V1 = () => {
    return (<div>V1</div>);
}
const V2 = () => {
    return (<div>V2</div>);
}

const components = {
    v1: V1,
    v2: V2
}

export default function ConditionalPropsRender(props) {
    const SpecificComponent = components[props.propsType];
    return (<SpecificComponent />);
}