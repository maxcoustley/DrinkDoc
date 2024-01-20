import React from 'react';

function Session(props) {
    return (
        <div>
            <View
                style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: COLORS.bgColor,
                }}>
                <Text>Session!</Text>
            </View>
        </div>
    );
}

export default Session;