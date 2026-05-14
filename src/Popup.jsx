import { FaCheckCircle } from 'react-icons/fa';

const Popup = () => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40">
            <div className="w-[350px] bg-white rounded-2xl shadow-2xl p-6 text-center">

                {/* Success Icon */}
                <FaCheckCircle className="text-green-500 text-7xl mx-auto mb-4" />

                {/* Title */}
                <h2 className="text-2xl font-bold text-gray-800">
                    Success!
                </h2>

                {/* Message */}
                <p className="text-gray-500 mt-2">
                    Product Added successfully.
                </p>
            </div>
        </div>
    );
};

export default Popup;