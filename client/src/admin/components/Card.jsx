import { useState, useEffect } from "react";
import resultStore from "../store/resultStore.js";

function Card({ title, isCheckFR }) {
  const [result, setResult] = useState('');
  const [localMessage, setLocalMessage] = useState('');
  const [localError, setLocalError] = useState('');
  const [localLoading, setLocalLoading] = useState(false);
  const [time, setTime] = useState("");

  const { updateFR, updateSR, isLoading, error, message } = resultStore();

  useEffect(() => {
    if (message && !localLoading) {
      const isFRMessage = message.toLowerCase().includes('fr') || message.toLowerCase().includes('first');
      const isSRMessage = message.toLowerCase().includes('sr') || message.toLowerCase().includes('second');

      if ((isCheckFR && isFRMessage) || (!isCheckFR && isSRMessage)) {
        setLocalMessage(message);
        const timer = setTimeout(() => {
          setLocalMessage('');
        }, 3000);
        return () => clearTimeout(timer);
      }
    }
  }, [message, isCheckFR, localLoading]);

  useEffect(() => {
    if (error && !localLoading) {
      const isFRError = error.toLowerCase().includes('fr') || error.toLowerCase().includes('first');
      const isSRError = error.toLowerCase().includes('sr') || error.toLowerCase().includes('second');

      if ((isCheckFR && isFRError) || (!isCheckFR && isSRError) || (!isFRError && !isSRError)) {
        setLocalError(error);
        const timer = setTimeout(() => {
          setLocalError('');
        }, 5000);
        return () => clearTimeout(timer);
      }
    }
  }, [error, isCheckFR, localLoading]);

  useEffect(() => {
    setLocalLoading(isLoading);
  }, [isLoading]);

  const formatTimeTo12Hour = (time24) => {
    if (!time24) return "";

    const [hours, minutes] = time24.split(':');
    const hour = parseInt(hours, 10);
    const minute = parseInt(minutes, 10);

    const period = hour >= 12 ? 'PM' : 'AM';

    let hour12 = hour % 12;
    if (hour12 === 0) {
      hour12 = 12;
    }

    return `${hour12}:${minute.toString().padStart(2, '0')} ${period}`;
  };

  const formatDate = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!result.trim()) {
      setLocalError('Please enter a result');
      return;
    }

    if (!time) {
      setLocalError('Please select a time');
      return;
    }

    setLocalMessage('');
    setLocalError('');
    setLocalLoading(true);

    const data = {
      city: "BHUTAN",
      date: formatDate(new Date()),
      result: {
        number: result.toString()
      },
      time: formatTimeTo12Hour(time)
    };
    console.log('Submitting data:', data);

    try {
      if (isCheckFR) {
        await updateFR(data);
      } else {
        await updateSR(data);
      }

      if (!error) {
        setResult('');
        setTime("");
      }
    } catch (err) {
      console.error('Submission error:', err);
    } finally {
      setLocalLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-2xl shadow-xl">

      <div className="text-center">
        <h1 className="text-2xl font-bold text-gray-800">
          {title}
        </h1>
      </div>

      <form className="mt-6 space-y-6" onSubmit={handleSubmit}>
        <div className="space-y-2">
          <label htmlFor={`result-${title}`} className="text-sm font-medium text-gray-700">
            Result
          </label>
          <input
            id={`result-${title}`}
            name="result"
            type="text"
            required
            className="w-full px-4 py-3 text-gray-900 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 transition-shadow duration-200"
            placeholder="Enter the result"
            value={result}
            onChange={(e) => setResult(e.target.value)}
            disabled={localLoading}
          />
        </div>
        <div className="space-y-2">
          <label htmlFor={`time-${title}`} className="text-sm font-medium text-gray-700">
            Time
          </label>
          <input
            id={`time-${title}`}
            name="time"
            type="time"
            required
            className="w-full px-4 py-3 text-gray-900 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 transition-shadow duration-200"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            disabled={localLoading}
          />
        </div>

        {localLoading && (
          <div className="p-3 bg-blue-100 border border-blue-300 rounded-lg">
            <p className="text-sm text-blue-700 text-center">Submitting {isCheckFR ? 'First' : 'Second'} Result...</p>
          </div>
        )}

        {localError && (
          <div className="p-3 bg-red-100 border border-red-300 rounded-lg">
            <p className="text-sm text-red-700 text-center">{localError}</p>
          </div>
        )}

        {localMessage && (
          <div className="p-3 bg-green-100 border border-green-300 rounded-lg">
            <p className="text-sm text-green-700 text-center">{localMessage}</p>
          </div>
        )}

        <div>
          <button
            type="submit"
            disabled={localLoading}
            className={`w-full px-4 py-3 font-semibold text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 focus:ring-opacity-50 transition-colors duration-200 ${localLoading
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-gray-900 hover:bg-gray-800 cursor-pointer'
              }`}
          >
            {localLoading ? 'Submitting...' : 'Submit'}
          </button>
        </div>
      </form>
    </div>
  );
}

export default Card;