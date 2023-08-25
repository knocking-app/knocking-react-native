import { StatusBar } from 'react-native'
import styled from 'styled-components/native'

export function App() {
    return (
        <StyledView>
            <StyledText>Knocking start</StyledText>
            <StatusBar style='auto' />
        </StyledView>
    )
}

const StyledView = styled.View`
    background-color: papayawhip;
    display: flex;
    height: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const StyledText = styled.Text`
    color: #bf4f74;
    font-size: 36;
`
