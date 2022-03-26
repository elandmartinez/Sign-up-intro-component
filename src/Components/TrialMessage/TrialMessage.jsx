import "../../styles/TrialMessage.css";
import PropTypes from "prop-types";

const TrialMessage = ({ maxDays, monthlyCost }) => {
    return (
        <div className="proof-time-alert-cont" >
            <p className="proof-time-alert" >
                <span className="proof-time-alert__max-days" >
                    Try it free {maxDays} days
                </span>
                then ${monthlyCost}/mo. thereafter
            </p>
        </div>
    )
}

TrialMessage.propTypes = {
    maxDays: PropTypes.string.isRequired,
    monthlyCost: PropTypes.string.isRequired,
}

export default TrialMessage
