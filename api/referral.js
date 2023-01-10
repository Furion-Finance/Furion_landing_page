import request from "./service";

// Returns referral code that belongs to owner
export const getCode = (network, owner) => {
	return request({
		url: '/referral_code',
		method: 'get',
		params: {
			'network': network,
			'address': owner
		}
	})
}

// Increase referrer's code usage by one
export const useCode = (network, referee, code) => {
	return request({
		url: '/add_invite',
		method: 'get',
		params: {
			'network': network,
			'input_address': referee,
			'referral_code': code
		}
	})
}

// Get amount of times a referral code has been used
export const getReferred = (network, owner) => {
	return request({
		url: '/refer_times',
		method: 'get',
		params: {
			'network': network,
			'address': owner,
		}
	})
}

export const getReferrer = (network, referee) => {
	return request({
		url: '/referral_user',
		method: 'get',
		params: {
			'network': network,
			'address': referee
		}
	})
}

export const addReferred = (network, referred_address, referrer_address) => {
	return request({
		url: '/add_referred',
		method: 'get',
		params: {
			'network': network,
			'referred_address': referred_address,
			'referrer_address': referrer_address,
		}
	})
}