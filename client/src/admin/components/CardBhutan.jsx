import { useState, useEffect } from "react";
import commonStore from "../store/commonStore.js";

function CardBhutan({ title }) {
  const [alldata, setAlldata] = useState({
    direct: '',
    house: '',
    ending: ''
  });
  
  const [localMessage, setLocalMessage] = useState('');
  const [localError, setLocalError] = useState('');
  const [localLoading, setLocalLoading] = useState(false);
  const [lastActionId, setLastActionId] = useState(null);

  const { update, isLoading, error, message } = commonStore();

  const isFR = title.toLowerCase().includes('f/r') || title.toLowerCase().includes('fr');
  const cardId = isFR ? 'fr-card' : 'sr-card';

  const generateActionId = () => {
    return `${cardId}-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
  };

  useEffect(() => {
    if (message && !localLoading) {
      const isRelevantMessage = lastActionId && message.includes(lastActionId);
      
      if (isRelevantMessage) {
        setLocalMessage(message.replace(`-${lastActionId}`, ''));
        const timer = setTimeout(() => {
          setLocalMessage('');
        }, 3000);
        return () => clearTimeout(timer);
      }
    }
  }, [message, localLoading, lastActionId]);

  useEffect(() => {
    if (error && !localLoading) {
      const isRelevantError = lastActionId && error.includes(lastActionId);
      
      if (isRelevantError) {
        setLocalError(error.replace(`-${lastActionId}`, ''));
        const timer = setTimeout(() => {
          setLocalError('');
        }, 5000);
        return () => clearTimeout(timer);
      }
    }
  }, [error, localLoading, lastActionId]);

  useEffect(() => {
    setLocalLoading(isLoading);
  }, [isLoading]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    if (!alldata.direct.trim() || !alldata.house.trim() || !alldata.ending.trim()) {
      setLocalError('Please fill in all fields');
      return;
    }

    setLocalMessage('');
    setLocalError('');
    setLocalLoading(true);

    const actionId = generateActionId();
    setLastActionId(actionId);

    const data = {
      date: new Date().toISOString(),
      actionId: actionId
    };

    if (isFR) {
      data.FR = {
        Direct: alldata.direct.toString(),
        House: alldata.house.toString(),
        Ending: alldata.ending.toString()
      };
    } else {
      data.SR = {
        Direct: alldata.direct.toString(),
        House: alldata.house.toString(),
        Ending: alldata.ending.toString()
      };
    }

    console.log(`Submitting ${isFR ? 'FR' : 'SR'} with data:`, data);

    try {
      await update(data);
      
      if (!error) {
        setAlldata({
          direct: '',
          house: '',
          ending: ''
        });
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
          <label htmlFor={`direct-${title}`} className="text-sm font-medium text-gray-700">
            Direct
          </label>
          <input
            id={`direct-${title}`}
            name="direct"
            type="text"
            required
            className="w-full px-4 py-3 text-gray-900 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 transition-shadow duration-200"
            placeholder="Enter direct number"
            value={alldata.direct}
            onChange={(e) => setAlldata({ ...alldata, direct: e.target.value })}
            disabled={localLoading}
          />
        </div>

        <div className="space-y-2">
          <label htmlFor={`house-${title}`} className="text-sm font-medium text-gray-700">
            House
          </label>
          <input
            id={`house-${title}`}
            name="house"
            type="text"
            required
            className="w-full px-4 py-3 text-gray-900 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 transition-shadow duration-200"
            placeholder="Enter house number"
            value={alldata.house}
            onChange={(e) => setAlldata({ ...alldata, house: e.target.value })}
            disabled={localLoading}
          />
        </div>

        <div className="space-y-2">
          <label htmlFor={`ending-${title}`} className="text-sm font-medium text-gray-700">
            Ending
          </label>
          <input
            id={`ending-${title}`}
            name="ending"
            type="text"
            required
            className="w-full px-4 py-3 text-gray-900 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 transition-shadow duration-200"
            placeholder="Enter ending number"
            value={alldata.ending}
            onChange={(e) => setAlldata({ ...alldata, ending: e.target.value })}
            disabled={localLoading}
          />
        </div>

        {localLoading && (
          <div className="p-3 bg-blue-100 border border-blue-300 rounded-lg">
            <p className="text-sm text-blue-700 text-center">
              Submitting {isFR ? 'First' : 'Second'} Result...
            </p>
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
            className={`w-full px-4 py-3 font-semibold text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 focus:ring-opacity-50 transition-colors duration-200 ${
              localLoading 
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

export default CardBhutan;