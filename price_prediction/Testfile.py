import pandas as pd
import matplotlib.pyplot as plt
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
from sklearn.metrics import mean_squared_error, r2_score

# load the dataset
df = pd.read_csv('ETH-USD.csv')

# convert the Date column to datetime format and set it as index
df['Date'] = pd.to_datetime(df['Date'])
df.set_index('Date', inplace=True)

# extract features and target variable
X = df[['Open']]
y = df['Close']

# split the data into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# train the linear regression model
reg = LinearRegression()
reg.fit(X_train, y_train)

# predict the close value for new data
new_date = pd.to_datetime('2021-03-22') + pd.DateOffset(days=1)
new_data = [[3000.0]]
predicted_close = reg.predict(new_data)
print(f'Predicted Close Value on {new_date.date()}:', predicted_close[0])

# evaluate the model performance on the testing set
y_pred = reg.predict(X_test)
mse = mean_squared_error(y_test, y_pred)
rmse = mse ** 0.5
r2 = r2_score(y_test, y_pred)
print('Mean Squared Error:', mse)
print('Root Mean Squared Error:', rmse)
print('R-Squared:', r2)

# plot the actual and predicted values of the Close column for last 10 dates in the test set
last_10_dates = y_test.tail(1900).index
plt.figure(figsize=(12,6))
plt.scatter(last_10_dates, y_test.tail(1900).values, label='Actual')
plt.scatter(last_10_dates, y_pred[-1900:], label='Predicted')
plt.xlabel('Date')
plt.ylabel('Close Value')
plt.legend()
plt.show()

