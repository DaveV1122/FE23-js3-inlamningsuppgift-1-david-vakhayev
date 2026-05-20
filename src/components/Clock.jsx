function Clock({ time }) {
  const date = new Date(time);

  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");

  return (
    <div className="clock">
      <h1>Current Time</h1>
      <p>
        {hours}:{minutes}:{seconds}
      </p>
    </div>
  );
}

export default Clock;