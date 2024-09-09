import PropTypes from 'prop-types';

const ItemListContainer = ({ greeting }) => {
    return (
        <div
            style={{
                fontSize: "2 rem",
                fontWeight: "bold",
                font: "Nunito",
                height: '100%',
                width: '90vw',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            {greeting}
        </div>
    );
};

ItemListContainer.propTypes = {
    greeting: PropTypes.string.isRequired,
};

export default ItemListContainer;